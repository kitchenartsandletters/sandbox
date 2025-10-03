import React from 'react';
import './App.css'
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CitymealsLandingMockup from './CitymealsLandingMockup';

function Dashboard() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Sandbox Demos</h1>
      <p style={{ textAlign: 'center' }}>Explore various demo projects in this sandbox environment.</p>
      <div className="dashboard-grid">
        <div className="card">
          <h2>Citymeals Landing Page Mockup</h2>
          <p>A simple landing page mockup for Citymeals.</p>
          <Link to="/citymeals" className="btn">View Demo</Link>
        </div>
        <div className="card">
          <h2>Future Demo 1</h2>
          <p>Description for future demo 1.</p>
          <button className="btn" disabled>Coming Soon</button>
        </div>
        <div className="card">
          <h2>Future Demo 2</h2>
          <p>Description for future demo 2.</p>
          <button className="btn" disabled>Coming Soon</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/citymeals" element={<CitymealsLandingMockup />} />
        {/* Future sandboxes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;