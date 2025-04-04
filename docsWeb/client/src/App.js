import React from 'react';
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
	return (
		<div className="App">
			{' '}
			{/* Tambahkan elemen root dengan class App */}
			<Router>
				{/* Navbar akan selalu terlihat di semua halaman */}
				<Navbar />
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
