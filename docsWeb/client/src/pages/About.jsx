import React from 'react';
import './styles/About.css';

const About = () => {
	return (
		<div className="about-container">
			<div className="about-header">
				<h1>About Us</h1>
			</div>
			<div className="about-content">
				<div className="about-card">
					<img src="/logo.png" alt="Our Team" className="about-image" />
					<h2>Who Are We?</h2>
					<p>
						ETLWHIZ is a passion-driven personal project that serves as a space
						to document and reflect upon the lessons and knowledge the author
						has gained over time.
					</p>
					<p>
						It also acts as a showcase for various open-source projects that
						have been thoughtfully developed, aiming not only to contribute
						meaningfully to the global community but also to foster personal
						growth and improvement.
					</p>
				</div>
				<div className="about-card">
					<img src="/logo.png" alt="Our Vision" className="about-image" />
					<h2>Our Mission</h2>
					<p>
						<p>
							Through this initiative, the author aspires to bridge the gap
							between learning and application, inspiring others to pursue their
							own creative and technical endeavors.
						</p>
						<p>
							By focusing on collaboration, innovation, and self-improvement,
							ETLWHIZ embodies a commitment to continuous learning and giving
							back to the world of technology and beyond.
						</p>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
