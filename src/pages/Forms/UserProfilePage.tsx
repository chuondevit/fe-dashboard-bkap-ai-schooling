import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { authFetch } from "../../utils/authFetch";

interface Profile {
  userId: number;
  username: string | null;
  email: string | null;
  phone: string | null;
  role: string;
  objectType: string;
  fullName?: string;
  code?: string;
  birthdate?: string;
  className?: string;
  homeroom?: string;
  hobbies?: string[];
}

const USER_ROLES = [
  { value: "PARENT", label: "Phụ huynh" },
  { value: "SCHOOL_ADMIN", label: "Quản trị trường học" },
  { value: "STUDENT", label: "Học sinh" },
  { value: "TEACHER", label: "Giáo viên" },
  { value: "SYSTEM_ADMIN", label: "Quản trị hệ thống" },
];

export default function UserProfilePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch chi tiết profile
  useEffect(() => {
    setLoading(true);
    authFetch(`${API_URL}/profile/${id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("❌ Error fetching profile:", err))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  // Lưu profile
  const handleSave = async () => {
    if (!profile) return;

    await authFetch(`${API_URL}/profile/${profile.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    navigate("/users");
  };

  if (loading) return <p className="p-4">Đang tải...</p>;
  if (!profile) return <p className="p-4">Không tìm thấy profile</p>;

  return (
    <>
      <PageMeta title="Chi tiết tài khoản" description="Thông tin chi tiết người dùng" />
      <PageBreadcrumb pageTitle="Chi tiết tài khoản" />

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Thông tin người dùng</h2>

        <div className="space-y-4">
          {/* Họ tên */}
          <input
            className="border p-2 w-full rounded"
            value={profile.fullName || ""}
            onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            placeholder="Họ và tên"
          />

          {/* Username */}
          <input
            className="border p-2 w-full rounded"
            value={profile.username || ""}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            placeholder="Username"
          />

          {/* Email */}
          <input
            type="email"
            className="border p-2 w-full rounded"
            value={profile.email || ""}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="Email"
          />

          {/* Số điện thoại */}
          <input
            className="border p-2 w-full rounded"
            value={profile.phone || ""}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            placeholder="Số điện thoại"
          />

          {/* Ngày sinh (chỉ student) */}
          {profile.objectType === "STUDENT" && (
            <input
              type="date"
              className="border p-2 w-full rounded"
              value={profile.birthdate || ""}
              onChange={(e) => setProfile({ ...profile, birthdate: e.target.value })}
            />
          )}

          {/* Vai trò */}
          {/* <select
            className="border p-2 w-full rounded"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            {USER_ROLES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select> */}

          {/* Lớp hoặc chủ nhiệm */}
          {profile.className && (
            <div>
              <label className="font-medium">Lớp học:</label>{" "}
              <span>{profile.className}</span>
            </div>
          )}
          {profile.homeroom && (
            <div>
              <label className="font-medium">Chủ nhiệm lớp:</label>{" "}
              <span>{profile.homeroom}</span>
            </div>
          )}

        
        </div>

        <div className="flex space-x-2 mt-6">
          <Button variant="outline" onClick={() => navigate("/users")}>
            Quay lại
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </>
  );
}
