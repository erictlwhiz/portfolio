import React from 'react';
import Navbar from '../components/Navbar'; // Pastikan path sesuai dengan lokasi Navbar.jsx
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="content">
        <h1>Welcome to the Documentation Page</h1>
        <p>This page contains useful guides and tutorials for setting up React projects.</p>
        <p>Use the navigation bar above to explore different sections.</p>
      </div>
    </div>
  );
};

export default Home;