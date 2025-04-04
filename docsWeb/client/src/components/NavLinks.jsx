import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ className, onClick }) => {
	return (
		<>
			<Link to="/algorithm" style={{ textDecoration: 'none' }}>
				<span className={className} onClick={onClick}>
					Algorithm
				</span>
			</Link>
			<Link to="/reactsetup" style={{ textDecoration: 'none' }}>
				<span className={className} onClick={onClick}>
					React Setup
				</span>
			</Link>
			<Link to="/about" style={{ textDecoration: 'none' }}>
				<span className={className} onClick={onClick}>
					About
				</span>
			</Link>
		</>
	);
};

export default NavLinks;
