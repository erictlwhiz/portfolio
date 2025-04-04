import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
	const [isTransparent, setIsTransparent] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsTransparent(true);
			} else {
				setIsTransparent(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`navbar ${isTransparent ? 'transparent' : ''}`}>
			<div className="navbar-logo-container">
				<Link to="/">
					<img src="/logo.png" alt="Logo" className="navbar-logo" />
				</Link>
				<Link to="/">
					<span className="navbar-logo-text">ETLWHIZ</span>
				</Link>
			</div>
			<div className="navbar-links">
				<Link to="/reactsetup">
					<span className="navbar-links-item">React Setup</span>
				</Link>
				<Link to="/about">
					<span className="navbar-links-item">About</span>
				</Link>
			</div>
			{/* Dropdown menu for smaller screens */}
			<div className="navbar-dropdown">
				<span className="navbar-links-item">Menu</span>
				<ul className="navbar-dropdown-menu">
					<li>
						<Link to="/reactsetup">React Setup</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
