import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Pastikan path ini sesuai dengan lokasi Home.jsx

function App() {
  return (
    <Router>
      <Routes>
        {/* Render Home.jsx jika path URL kosong */}
        <Route path="/" element={<Home />} />
        {/* Render Home.jsx jika path URL adalah /home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;