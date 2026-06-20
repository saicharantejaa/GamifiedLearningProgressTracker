import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

export default function Navbar() {
  const { currentUser, darkMode, logout, toggleDarkMode } = useUser();

  return (
    <header className="navbar-shell">
      <NavLink to="/" className="brand">
        <span style={{ background: currentUser.avatarColor }}>{currentUser.name.slice(0, 1)}</span>
        <div>
          <strong>Learning Tracker</strong>
          <small>{currentUser.rollNo}</small>
        </div>
      </NavLink>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/subjects">Subjects</NavLink>
        <NavLink to="/badges">Badges</NavLink>
        <NavLink to="/progress">Progress</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <div className="nav-actions">
        <button type="button" className="icon-button" onClick={toggleDarkMode} title="Toggle dark mode">
          {darkMode ? "L" : "D"}
        </button>
        <button type="button" className="ghost-button" onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
