import React from 'react';
import './styles/LearnReact.css';

const LearnReact = () => {
	return (
		<div className="react-page">
			{/* react-component Sidebar Menu */}
			<div className="react-component-sidebar">
				<ul className="react-component-sidebar-menu">
					<li>
						<a href="#setup" className="react-component-sidebar-link">
							Setup
						</a>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="react-container">
				<h1 className="react-title">React Setup Documentation</h1>
				<p className="react-description">
					This page provides a guide to setting up a React project.
				</p>
				<div className="react-section" id="setup">
					<h2 className="react-subtitle">Setup</h2>
					<ol className="react-list">
						<li>
							<strong>Initialize the Project:</strong>
							<p>Run the following command to create a new React project:</p>
							<code>npx create-react-app client</code>
						</li>
						<li>
							<strong>Install Dependencies:</strong>
							<p>Add commonly used libraries:</p>
							<code>npm install react-router-dom axios</code>
						</li>
						<li>
							<strong>Setup Linting:</strong>
							<p>
								Linting helps maintain code quality. Run the following command:
							</p>
							<code>
								npm install --save-dev eslint prettier eslint-config-prettier
								eslint-plugin-react eslint-plugin-react-hooks
							</code>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default LearnReact;
