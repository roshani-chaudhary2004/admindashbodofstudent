// src/App.js
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import ActivityTable from './components/ActivityTable';
import Challan from './pages/Challan';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <div className="app-wrapper container">
        <button className="menu-toggle" onClick={() => setShowSidebar(!showSidebar)}>
          ☰ Menu
        </button>
        <Sidebar show={showSidebar} />
        <main className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <StatsCards />
                <ActivityTable />
              </>
            } />
            <Route path="/challan" element={<Challan />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
