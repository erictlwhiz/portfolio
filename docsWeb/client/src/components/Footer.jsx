import React from 'react';
import './styles/Footer.css'; // Import file CSS untuk styling

const Footer = () => {
	const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

	return (
		<footer className="footer">
			<p className="footer-text">
				Copyright &copy; ETLWHIZ 2024
				{currentYear > 2024 ? ` - ${currentYear}` : ''}
			</p>
		</footer>
	);
};

export default Footer;
