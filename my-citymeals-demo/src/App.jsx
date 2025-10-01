import React from 'react';
import './App.css'
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CitymealsLandingMockup from './CitymealsLandingMockup';

function Dashboard() {
  return (
    <div>
      <h1>Sandbox Demos</h1>
      <div className="card">
        <h2>Citymeals Landing Page Mockup</h2>
        <p>A simple landing page mockup for Citymeals.</p>
        <Link to="/citymeals" className="btn">View Demo</Link>
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