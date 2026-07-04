// src/pages/Profile/Profile.tsx
import { useAuth } from "../../components/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaCheckCircle, FaSignOutAlt } from "react-icons/fa";
// import "./Profile.css";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home after logout
    alert("You have been successfully signed out");
  };

  if (!user) {
    return (
      <div className="profile-guest">
        <FaUserCircle size={100} color="#888" />
        <h2>Welcome, Guest!</h2>
        <p>Please log in or register to access your profile.</p>
        <div className="actions">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/register" className="btn-register">Register</Link>
        </div>
        <ul className="benefits">
          <li><FaCheckCircle /> Save your shopping cart</li>
          <li><FaCheckCircle /> View your orders</li>
          <li><FaCheckCircle /> Get exclusive offers</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="profile-user">
      <div className="profile-header">
        <FaUserCircle size={80} className="user-avatar" />
        <h2>Welcome back, {user.username}!</h2>
        <button onClick={handleLogout} className="btn-logout">
          <FaSignOutAlt /> Sign Out
        </button>
      </div>
      
   
    </div>
  );
}
