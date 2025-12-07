// src/layout/AppSidebar.tsx
import { Link, useLocation } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import SidebarWidget from "./SidebarWidget";

// ICONS
import {
  GridIcon,
  UserCircleIcon,
  BoxCubeIcon,
  DocsIcon,
  CalenderIcon,
  TableIcon,
} from "../icons";

// -------------------- MENU GROUPS --------------------
const navItems = [
  {
    category: "TỔNG QUAN",
    items: [
      {
        name: "Dashboard lớp học",
        path: "",   // 👈 BẠN YÊU CẦU – ĐỂ NGUYÊN NHƯ THẾ
        icon: <GridIcon />,
      },
      {
        name: "Học sinh & Portfolio",
        path: "/students",
        icon: <UserCircleIcon />,
      },
      {
        name: "AI Challenge & Lab",
        path: "/challenge-lab",
        icon: <BoxCubeIcon />,
      },
    ],
  },

  {
    category: "SÁNG TẠO & HỆ SINH THÁI",
    items: [
      {
        name: "AI Lesson & Quiz",
        path: "/lessons",
        icon: <DocsIcon />,
      },
      {
        name: "AI Channel của tôi",
        path: "/channel",
        icon: <CalenderIcon />,
      },
      {
        name: "Marketplace nội dung",
        path: "/marketplace",
        icon: <TableIcon />,
      },
    ],
  },
];

const othersItems: any[] = []; // để tránh import cũ lỗi

// ===================== SIDEBAR COMPONENT =====================
const AppSidebar: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen, setIsHovered } = useSidebar();
  const location = useLocation();
const isActive = (path: string) => {
  if (path === "") {
    return (
      location.pathname === "/dashboard/teacher" ||
      location.pathname === "/dashboard/teacher/"
    );
  }

  return location.pathname.startsWith(`/dashboard/teacher${path}`);
};

  // Kiểm tra active bằng includes → Hỗ trợ mọi dạng URL con

  // RENDER MENU
  const renderMenuItems = () => (
    <ul className="flex flex-col gap-7">
      {navItems.map((group, index) => (
        <li key={index}>
          {/* GROUP TITLE */}
          <h2 className="text-[11px] uppercase tracking-wide font-medium text-gray-400 mb-3 pl-3">
            {group.category}
          </h2>

          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-1">
            {group.items.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center rounded-lg px-3 py-2.5 transition-all
                    ${
                      isActive(item.path)
                        ? "bg-blue-100 text-blue-600 font-semibold shadow-sm"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {/* ICON */}
                  <span className="w-[22px] h-[22px] flex items-center justify-center mr-3 text-gray-500">
                    {item.icon}
                  </span>

                  {/* TEXT */}
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="text-[14px] leading-[20px]">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 left-0 h-screen mt-16 lg:mt-0
        bg-white border-r border-gray-200 text-gray-900
        flex flex-col px-6 pt-6 transition-all duration-300 ease-in-out z-50

        ${isExpanded || isHovered || isMobileOpen ? "w-[260px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LOGO */}
      <div
        className={`mb-8 ${
          !isExpanded && !isHovered ? "flex justify-center" : ""
        }`}
      >
        <Link to="/">
          {(isExpanded || isHovered || isMobileOpen) ? (
            <img
              src="/admin/images/logo/logo.svg"
              width={150}
              height={40}
              alt="Logo"
            />
          ) : (
            <img
              src="/images/logo/logo-icon.svg"
              width={32}
              height={32}
              alt="Logo"
            />
          )}
        </Link>
      </div>

      {/* MENU */}
      <nav className="flex-1 overflow-y-auto no-scrollbar">
        {renderMenuItems()}
      </nav>

      {/* FOOTER (Home + Logout) */}
      {(isExpanded || isHovered || isMobileOpen) && <SidebarWidget />}
    </aside>
  );
};

export default AppSidebar;
export { navItems, othersItems };
