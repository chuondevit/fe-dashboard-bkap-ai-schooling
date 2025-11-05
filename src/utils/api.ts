import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL || "";

// Tạo instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// ====== 1️⃣ GẮN ACCESS TOKEN TỰ ĐỘNG ======
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

interface RefreshOptions {
    silent?: boolean;
}

interface RefreshResult {
    accessToken: string;
    refreshToken?: string;
}

export async function refreshSession(options: RefreshOptions = {}): Promise<RefreshResult> {
    const { silent = false } = options;
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
        if (!silent) {
            toast.warning("⚠️ Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
        }
        localStorage.clear();
        window.location.href = "/signin";
        throw new Error("Thiếu refresh token");
    }

    try {
        const res = await axios.post(
            `${API_URL}/auth/refresh`,
            { refreshToken },
            { headers: { "Content-Type": "application/json" } }
        );

        const { accessToken, refreshToken: newRefreshToken } = res.data ?? {};
        if (!accessToken) {
            throw new Error("Không nhận được token mới từ server");
        }

        localStorage.setItem("token", accessToken);
        if (newRefreshToken) {
            localStorage.setItem("refreshToken", newRefreshToken);
        }

        if (!silent) {
            toast.info("🔄 Phiên đăng nhập đã được làm mới!");
        }

        return { accessToken, refreshToken: newRefreshToken };
    } catch (error) {
        console.error("❌ Lỗi refresh token:", error);
        if (!silent) {
            toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
        }
        localStorage.clear();
        window.location.href = "/signin";
        throw error;
    }
}

// ====== 2️⃣ XỬ LÝ TOKEN HẾT HẠN (401) → TỰ REFRESH ======
api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest: any = error.config;

        // Nếu là lỗi 401 và chưa thử refresh lần nào
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const { accessToken } = await refreshSession();

                if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                }

                return api(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;

export async function apiRequest<T = unknown>(config: AxiosRequestConfig) {
    const response = await api.request<T>(config);
    return response.data;
}

export async function apiGet<T = unknown>(url: string, config?: AxiosRequestConfig) {
    const response = await api.get<T>(url, config);
    return response.data;
}

export async function apiPost<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await api.post<T>(url, data, config);
    return response.data;
}

export async function apiPut<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await api.put<T>(url, data, config);
    return response.data;
}

export async function apiPatch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await api.patch<T>(url, data, config);
    return response.data;
}

export async function apiDelete<T = unknown>(url: string, config?: AxiosRequestConfig) {
    const response = await api.delete<T>(url, config);
    return response.data;
}
