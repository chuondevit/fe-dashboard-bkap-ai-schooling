import { Navigate } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import useTokenSync from "../hooks/useTokenSync";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const token = useTokenSync();
    const [status, setStatus] = useState<
        "checking" | "authorized" | "unauthorized" | "forbidden"
    >("checking");

    const API_URL = import.meta.env.VITE_API_URL || "";

    useEffect(() => {
        let isMounted = true;

        const verifyToken = async () => {
            const currentToken = localStorage.getItem("token");

            if (!currentToken) {
                if (isMounted) setStatus("unauthorized");
                return;
            }

            try {
                const payload = JSON.parse(atob(currentToken.split(".")[1]));

                // ⭐ KIỂM TRA ROLE NGAY LẬP TỨC
                if (payload.role === "STUDENT") {
                    if (isMounted) setStatus("forbidden");
                    return;
                }

                const isExpired = payload.exp * 1000 < Date.now();

                if (!isExpired) {
                    if (isMounted) setStatus("authorized");
                    return;
                }

                // ===========================
                // REFRESH TOKEN
                // ===========================
                const refreshToken = localStorage.getItem("refreshToken");
                if (!refreshToken) {
                    localStorage.removeItem("token");
                    if (isMounted) setStatus("unauthorized");
                    return;
                }

                const res = await axios.post(
                    `${API_URL}/auth/refresh`,
                    { refreshToken },
                    { headers: { "Content-Type": "application/json" } }
                );

                const newAccessToken = res.data?.accessToken;
                if (!newAccessToken) throw new Error("Không nhận được token mới");

                localStorage.setItem("token", newAccessToken);

                if (res.data?.refreshToken) {
                    localStorage.setItem("refreshToken", res.data.refreshToken);
                }

                // ⭐ KIỂM TRA ROLE LẠI SAU KHI REFRESH
                const newPayload = JSON.parse(atob(newAccessToken.split(".")[1]));
                if (newPayload.role === "STUDENT") {
                    if (isMounted) setStatus("forbidden");
                    return;
                }

                if (isMounted) setStatus("authorized");
            } catch (error) {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                if (isMounted) setStatus("unauthorized");
            }
        };

        setStatus("checking");
        verifyToken();

        return () => {
            isMounted = false;
        };
    }, [token, API_URL]);

    // Loading
    if (status === "checking") return null;

    // Không có token → đăng nhập
    if (status === "unauthorized") {
        return <Navigate to="/signin" replace />;
    }

    // Có token nhưng role = STUDENT → cấm truy cập
    if (status === "forbidden") {
        return <Navigate to="/no-permission" replace />;
    }

    // Hợp lệ
    return <>{children}</>;
}
