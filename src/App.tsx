import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";

import ChallengeLabPage from "./pages/challenge/ChallengeLabPage";

import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Student from "./pages/Student & Portfolio/StudentList";
import LessonsPage from "./pages/lessons/LessonsPage";
import Marketplace from "./pages/Marketplace"; // chỉnh lại path cho đúng


import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import ResetPassword from "./pages/AuthPages/resetpassword";
import AuditLog from "./pages/AuditLog/AuditLog"


import useTokenSync from "./hooks/useTokenSync";
import NoPermission from "./pages/OtherPage/NoPermission";
import StudentPortfolioPage from "./pages/Student & Portfolio/StudentPortfolio";
import TeacherChannelPage from "./pages/Channel/TeacherChannel";
export default function App() {
  const token = useTokenSync();
  return (
    <>
      <Router basename="/dashboard-teacher">
        <ScrollToTop />
        <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
          {/* Dashboard Layout */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/audit-logs" element={<AuditLog />} />

            {/* Forms */}
            
            <Route path="/students/:id" element={<StudentPortfolioPage />} />
            <Route path="/challenge-lab" element={<ChallengeLabPage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/channel" element={<TeacherChannelPage />} />
            <Route path="/marketplace" element={<Marketplace />} />


            {/* Tables */}
         
            <Route path="/students" element={<Student />} />
        


            {/* Charts */}
         
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Fallback Route */}
          <Route path="/no-permission" element={<NoPermission />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
