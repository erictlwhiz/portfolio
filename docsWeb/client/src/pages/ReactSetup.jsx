import React from 'react';
import './styles/ReactSetup.css';

const ReactSetup = () => {
	return (
		<div className="react-setup-container">
			<h1>React Setup Documentation</h1>
			<ol>
				<li>
					<strong>Inisialisasi Proyek:</strong>
					<p>Jalankan perintah berikut untuk membuat proyek React:</p>
					<code>npx create-react-app client</code>
				</li>
				<li>
					<strong>Instalasi Dependensi:</strong>
					<p>Tambahkan library yang sering digunakan:</p>
					<code>npm install react-router-dom axios</code>
				</li>
				<li>
					<strong>Setup Linting:</strong>
					<p>
						Linting membantu menjaga kualitas kode. Jalankan perintah berikut:
					</p>
					<code>
						npm install --save-dev eslint prettier eslint-config-prettier
						eslint-plugin-react eslint-plugin-react-hooks
					</code>
				</li>
			</ol>
		</div>
	);
};

export default ReactSetup;
