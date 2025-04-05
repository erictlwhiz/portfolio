import React from 'react';
import { FaCog } from 'react-icons/fa'; // Import ikon gear dari react-icons
import './styles/Maintenance.css';

const Maintenance = () => {
	return (
		<div className="maintenance-container">
			<div className="maintenance-header">
				<h1>Coming Soon</h1>
				<p>This Site is Under Maintenance</p>
				{/* Tambahkan ikon gear besar */}
				<div className="maintenance-icon">
					<FaCog />
				</div>
			</div>
		</div>
	);
};

export default Maintenance;
