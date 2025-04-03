import React from 'react';
import './styles/About.css';

const About = () => {
	return (
		<div className="about-container">
			<div className="about-header">
				<h1>About Us</h1>
				<p>Learn more about ETLWHIZ and what we do.</p>
			</div>
			<div className="about-content">
				<div className="about-card">
					<img src="/team.jpg" alt="Our Team" className="about-image" />
					<h2>Our Mission</h2>
					<p>
						At ETLWHIZ, we aim to simplify data transformation and empower
						businesses with efficient ETL solutions. Our team is dedicated to
						delivering high-quality tools and services.
					</p>
				</div>
				<div className="about-card">
					<img src="/vision.jpg" alt="Our Vision" className="about-image" />
					<h2>Our Vision</h2>
					<p>
						We envision a world where data integration is seamless and
						accessible to everyone, enabling smarter decisions and better
						outcomes.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
