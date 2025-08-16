


import { useState } from "react";
import { Link } from "react-router-dom";
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
            <li><Link to="/challan"style={{ color: "red", textDecoration: "none",backgroundColor:"yellow" }}>🧾 Challan</Link></li>
            <li><Link to="/idcard"style={{ color: "red", textDecoration: "none",backgroundColor:"yellow" }}>🆔 ID Card</Link></li> {/* ✅ Clickable */}
            <li><Link to="/projectlist"style={{ color: "red", textDecoration: "none",backgroundColor:"yellow" }}>📂 Project List</Link></li>
          </ul>
        )}

        <li>👥 Manage Students</li>
        
  
        <li>📄 CERTIFICATES</li>
        
        <li>🚪 Log</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
