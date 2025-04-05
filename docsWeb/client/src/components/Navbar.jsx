import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import {
	FaBars,
	FaTimes,
	FaMoon,
	FaSun,
	FaChevronDown,
	FaChevronUp,
} from 'react-icons/fa'; // Tambahkan ikon panah

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
	const [isTransparent, setIsTransparent] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mengontrol sidebar
	const [openDropdown, setOpenDropdown] = useState(null); // State untuk melacak dropdown yang terbuka

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

	// Fungsi untuk toggle sidebar
	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	// Fungsi untuk toggle dropdown menu
	const toggleDropdown = (dropdownName) => {
		setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
	};

	return (
		<>
			<nav className={`navbar ${isTransparent ? 'transparent' : ''}`}>
				<div className="navbar-logo-container">
					<Link to="/">
						<img src="/logo.png" alt="Logo" className="navbar-logo" />
					</Link>
					<Link to="/">
						<span className="navbar-logo-text">ETLWHIZ</span>
					</Link>
				</div>

				<div className="navbar-right">
					<div className="navbar-dark-mode-toggle" onClick={toggleDarkMode}>
						{isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
					</div>

					{/* Ikon menu untuk membuka sidebar */}
					<div className="navbar-sidebar-toggle">
						<span onClick={toggleSidebar}>
							<FaBars size={24} />
						</span>
					</div>
				</div>
			</nav>

			{/* Sidebar */}
			<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
				<div className="sidebar-header">
					<span className="close-icon" onClick={toggleSidebar}>
						<FaTimes size={24} />
					</span>
				</div>
				<div className="sidebar-menu">
					{/* Dropdown Menu 1 */}
					<div
						className={`sidebar-dropdown ${openDropdown === 'resources' ? 'open' : ''}`}
					>
						<span
							className="sidebar-links-item dropdown-toggle"
							onClick={() => toggleDropdown('resources')}
						>
							Resources
							{openDropdown === 'resources' ? (
								<FaChevronUp className="dropdown-icon" />
							) : (
								<FaChevronDown className="dropdown-icon" />
							)}
						</span>
						<ul className="dropdown-menu">
							<li>
								<Link
									to="/learnAlgorithm"
									className="dropdown-item"
									onClick={toggleSidebar}
								>
									Algorithm
								</Link>
							</li>
							<li>
								<Link
									to="/learnReact"
									className="dropdown-item"
									onClick={toggleSidebar}
								>
									React
								</Link>
							</li>
						</ul>
					</div>

					{/* Dropdown Menu 2 */}
					<div
						className={`sidebar-dropdown ${openDropdown === 'exercises' ? 'open' : ''}`}
					>
						<span
							className="sidebar-links-item dropdown-toggle"
							onClick={() => toggleDropdown('exercises')}
						>
							Exercises
							{openDropdown === 'exercises' ? (
								<FaChevronUp className="dropdown-icon" />
							) : (
								<FaChevronDown className="dropdown-icon" />
							)}
						</span>
						<ul className="dropdown-menu">
							<li>
								<Link
									to="/maintenance"
									className="dropdown-item"
									onClick={toggleSidebar}
								>
									Coming Soon
								</Link>
							</li>
						</ul>
					</div>

					{/* Tautan lainnya */}
					<Link
						to="/about"
						className="sidebar-links-item"
						onClick={toggleSidebar}
					>
						About
					</Link>
				</div>
			</div>

			{/* Overlay untuk menutup sidebar */}
			{isSidebarOpen && (
				<div className="sidebar-overlay" onClick={toggleSidebar}></div>
			)}
		</>
	);
};

export default Navbar;
