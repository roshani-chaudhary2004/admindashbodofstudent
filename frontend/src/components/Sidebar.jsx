import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Sidebar.css";

function Sidebar({ show }) {
  const [openDashboard, setOpenDashboard] = useState(false);

  const toggleDashboard = () => {
    setOpenDashboard(!openDashboard);
  };

  return (
    <aside className={`sidebar ${show ? "show" : ""}`}>
      <h2>STC Admin</h2>
      <ul>
        <li onClick={toggleDashboard}>👤 Dashboard ▾</li>

        {openDashboard && (
          <ul className="submenu">
            <li><Link to="/challan">🧾 Challan</Link></li> {/* ✅ FIXED */}
            <li><Link to="/idcard">🆔 ID Card</Link></li> {/* Optional */}
            <li><Link to="/projectlist">📂 Project List</Link></li> {/* Optional */}
          </ul>
        )}

        <li>👥 Manage Students</li>
        <li>📊 Manage Results</li>
        <li>💰 Manage Fees</li>
        <li>📅 Manage Batches</li>
        <li>📄 Reports</li>
        <li>⚙ Settings</li>
        <li>🚪 Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
