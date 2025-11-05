import React, { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Button from "../../components/ui/button/Button";
import { authFetch } from "../../utils/authFetch";

interface DefaultReply {
  id: number;
  replyText: string;
  createdBy: {
    id: number;
    username: string | null;
    email: string | null;
  } | null;
}

interface User {
  id: number;
  username: string | null;
  email: string;
}

const getCurrentUser = async (
  setMessage: (
    message: { type: "error" | "success"; text: string } | null
  ) => void
): Promise<User | null> => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("❌ Không tìm thấy token. Vui lòng đăng nhập lại.");
    setMessage({ type: "error", text: "❌ Vui lòng đăng nhập lại!" });
    return null;
  }

  try {
    const response = await authFetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:8080/api"}/auth/me`,
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        `❌ Lỗi khi lấy user, status: ${response.status} ${response.statusText}`,
        errorData
      );
      setMessage({
        type: "error",
        text: `❌ Lỗi: ${errorData.message || "Không thể lấy thông tin người dùng"
          }`,
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userData = await response.json();
    console.log("✅ Lấy thông tin user thành công");
    return {
      id: userData.id,
      username: userData.username || userData.email,
      email: userData.email,
    };
  } catch (err) {
    const error = err as Error;
    console.error("❌ Lỗi khi lấy thông tin user:", error.message);
    setMessage({
      type: "error",
      text: `❌ Lỗi: ${error.message || "Không thể kết nối server!"}`,
    });
    return null;
  }
};

export default function AddDefaultReply() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";
  const [replyText, setReplyText] = useState("");
  const [defaultReplies, setDefaultReplies] = useState<DefaultReply[]>([]);
  const [duplicateWarning, setDuplicateWarning] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setIsLoading(true);
      try {
        const user = await getCurrentUser(setMessage);
        if (!isMounted) return;

        setCurrentUser(user);
        if (!user) return;

        const response = await authFetch(`${API_URL}/default-replies`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!isMounted) return;

        if (Array.isArray(data)) {
          setDefaultReplies(data);
        } else if (data && Array.isArray(data.content)) {
          setDefaultReplies(data.content);
        } else {
          console.error("Unexpected API format:", data);
          setDefaultReplies([]);
        }
      } catch (err: any) {
        if (!isMounted) return;
        console.error("Error fetching default replies:", err);
        setMessage({
          type: "error",
          text: `❌ Lỗi: ${
            err?.message || "Không thể tải dữ liệu!"
          }`,
        });
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [API_URL]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Chuẩn hóa chuỗi để kiểm tra trùng lặp
  const normalizeString = (str: string): string => {
    return str.trim().toLowerCase().replace(/\s+/g, " ");
  };

  // Kiểm tra trùng lặp replyText
  const checkDuplicateReplyText = (replyText: string) => {
    const normalizedInput = normalizeString(replyText);
    if (!normalizedInput) {
      return "Từ khóa không được để trống.";
    }
    const isDuplicate = defaultReplies.some(
      (reply) => normalizeString(reply.replyText) === normalizedInput
    );
    return isDuplicate
      ? "Từ khóa này đã tồn tại. Vui lòng chọn từ khóa khác."
      : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) {
      setMessage({ type: "error", text: "❌ Vui lòng đăng nhập lại!" });
      navigate("/signin");
      return;
    }

    const duplicateMessage = checkDuplicateReplyText(replyText);
    if (duplicateMessage) {
      setDuplicateWarning(duplicateMessage);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage({ type: "error", text: "❌ Vui lòng đăng nhập lại!" });
      navigate("/signin");
      return;
    }

    try {
      setIsLoading(true);
      const payload = {
        replyText: replyText.trim(),
        createdById: currentUser.id,
      };
      console.log("📤 Yêu cầu POST tới:", `${API_URL}/default-replies`);
      console.log("📤 Payload:", JSON.stringify(payload, null, 2));
      const res = await authFetch(`${API_URL}/default-replies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("❌ Lỗi từ server:", errorData);
        setMessage({
          type: "error",
          text: `❌ Lỗi: ${errorData.message || "Thêm mới thất bại"}`,
        });
        return;
      }

      const MySwal = withReactContent(Swal);
      MySwal.fire("Thành công", "Thêm default reply thành công", "success");
      navigate("/DefaultReply");
    } catch (err) {
      const error = err as Error;
      console.error("❌ Lỗi khi gửi request:", error.message);
      const MySwal = withReactContent(Swal);
      MySwal.fire(
        "Lỗi",
        `Không thể thêm default reply: ${error.message}`,
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentUser) {
    return
    <Navigate to="/signin" replace />;

  }

  return (
    <>
      <PageMeta
        title="Thêm Default Reply | TailAdmin - Next.js Admin Dashboard Template"
        description="Trang thêm mới Default Reply cho TailAdmin"
      />
      <PageBreadcrumb pageTitle="Thêm Default Reply" />
      <div className="space-y-6">
        <ComponentCard title="Thêm Default Reply">
          {isLoading ? (
            <div className="text-center py-4">Đang tải...</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Từ khóa
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  value={replyText}
                  onChange={(e) => {
                    const newReplyText = e.target.value;
                    setReplyText(newReplyText);
                    setDuplicateWarning(checkDuplicateReplyText(newReplyText));
                  }}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Nhập từ khóa..."
                  required
                />
                {duplicateWarning && (
                  <p className="text-red-500 text-sm mt-1">
                    {duplicateWarning}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Người tạo
                </label>
                <input
                  type="text"
                  value={
                    currentUser.username || currentUser.email || "Unknown User"
                  }
                  className="w-full border rounded px-3 py-2 bg-gray-100"
                  disabled
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => navigate("/DefaultReply")}
                  disabled={isLoading}
                >
                  Hủy
                </Button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  disabled={isLoading || !!duplicateWarning}
                >
                  Thêm
                </button>
                ;
              </div>
            </form>
          )}
        </ComponentCard>
      </div>
    </>
  );
}
