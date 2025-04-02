import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Pastikan path ini sesuai dengan lokasi Home.jsx
import ReactSetup from './pages/ReactSetup'; // Pastikan path ini sesuai dengan lokasi ReactSetup.jsx

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect dari path kosong (/) ke /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* Render Home.jsx jika path URL adalah /home */}
        <Route path="/home" element={<Home />} />
        {/* Render ReactSetup.jsx jika path URL adalah /reactsetup */}
        <Route path="/reactsetup" element={<ReactSetup />} />
      </Routes>
    </Router>
  );
}

export default App;