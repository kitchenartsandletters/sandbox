import React from 'react';
import './App.css'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CitymealsLandingMockup from './CitymealsLandingMockup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CitymealsLandingMockup />} />
        {/* Future sandboxes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;