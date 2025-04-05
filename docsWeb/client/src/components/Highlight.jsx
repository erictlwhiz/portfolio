import React from 'react';
import './styles/Highlight.css'; // Import CSS for styling

const Highlight = ({ children }) => {
	return <span className="highlight-text">{children}</span>;
};

export default Highlight;
