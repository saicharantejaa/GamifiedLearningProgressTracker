import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { useUser } from "./context/UserContext.jsx";
import Badges from "./pages/Badges.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LeaderboardPage from "./pages/Leaderboard.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Progress from "./pages/Progress.jsx";
import Subjects from "./pages/Subjects.jsx";
import TopicDetail from "./pages/TopicDetail.jsx";
import TopicList from "./pages/TopicList.jsx";

function ProtectedRoute({ children }) {
  const { currentUser } = useUser();
  return currentUser ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const { currentUser, darkMode } = useUser();

  return (
    <BrowserRouter>
      <div className={darkMode ? "app-shell dark" : "app-shell"}>
        {currentUser && <Navbar />}
        <Routes>
          <Route path="/login" element={currentUser ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/subjects" element={<ProtectedRoute><Subjects /></ProtectedRoute>} />
          <Route path="/subjects/:subjectId" element={<ProtectedRoute><TopicList /></ProtectedRoute>} />
          <Route path="/subjects/:subjectId/topics/:topicIndex" element={<ProtectedRoute><TopicDetail /></ProtectedRoute>} />
          <Route path="/badges" element={<ProtectedRoute><Badges /></ProtectedRoute>} />
          <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
          <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
