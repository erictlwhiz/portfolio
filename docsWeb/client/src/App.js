import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import './App.css'; // Pastikan path ini sesuai dengan lokasi App.css
import Home from './pages/Home'; // Pastikan path ini sesuai dengan lokasi Home.jsx
import ReactSetup from './pages/ReactSetup'; // Pastikan path ini sesuai dengan lokasi ReactSetup.jsx
import About from './pages/About'; // Pastikan path ini sesuai dengan lokasi About.jsx
import Navbar from './components/Navbar'; // Pastikan path ini sesuai dengan lokasi Navbar.jsx

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Fungsi untuk toggle dark mode
	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
		// Tambahkan atau hapus class "dark-mode" pada body
		document.body.classList.toggle('dark-mode');
	};

	// Simpan preferensi dark mode di localStorage
	useEffect(() => {
		const savedMode = localStorage.getItem('dark-mode') === 'true';
		setIsDarkMode(savedMode);
		if (savedMode) {
			document.body.classList.add('dark-mode');
		}
	}, []);

	return (
		<div className="App">
			<Router>
				{/* Navbar akan selalu terlihat di semua halaman */}
				<Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
				<Routes>
					{/* Redirect dari path kosong (/) ke /home */}
					<Route path="/" element={<Navigate to="/home" replace />} />
					{/* Render Home.jsx jika path URL adalah /home */}
					<Route path="/home" element={<Home />} />
					{/* Render ReactSetup.jsx jika path URL adalah /reactsetup */}
					<Route path="/reactsetup" element={<ReactSetup />} />
					{/* Render About.jsx jika path URL adalah /about */}
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
