import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import './App.css'; // Pastikan path ini sesuai dengan lokasi App.css
import Home from './pages/Home'; // Pastikan path ini sesuai dengan lokasi Home.jsx
import Algorithm from './pages/Algorithm'; // Pastikan path ini sesuai dengan lokasi Algorithm.jsx
import ReactSetup from './pages/ReactSetup'; // Pastikan path ini sesuai dengan lokasi ReactSetup.jsx
import About from './pages/About'; // Pastikan path ini sesuai dengan lokasi About.jsx
import Navbar from './components/Navbar'; // Pastikan path ini sesuai dengan lokasi Navbar.jsx
import Footer from './components/Footer'; // Pastikan path ini sesuai dengan lokasi Footer.jsx

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Fungsi untuk toggle dark mode
	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			// Simpan preferensi dark mode di localStorage
			localStorage.setItem('dark-mode', newMode);
			// Tambahkan atau hapus class "dark-mode" pada body
			if (newMode) {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
			return newMode;
		});
	};

	// Ambil preferensi dark mode dari localStorage saat halaman dimuat
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
					<Route path="/algorithm" element={<Algorithm />} />
					{/* Render ReactSetup.jsx jika path URL adalah /reactsetup */}
					<Route path="/reactsetup" element={<ReactSetup />} />
					{/* Render About.jsx jika path URL adalah /about */}
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
