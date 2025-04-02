import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div>
      <h1>
        {"cd /Users/ericwu/Documents/portfolio"}
        <br />
        {"npx create-react-app client"}
        <br />
        {"npm install react-router-dom axios"}
        <br />
        {"Linting adalah proses analisis statis kode untuk mendeteksi kesalahan, potensi bug, atau pelanggaran terhadap standar penulisan kode"}
        <br />
        {"npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks"}
        <br />
        {"// filepath: /Users/ericwu/Documents/portfolio/learning/client/.eslintrc.json"}
        <br />
        {"buat file .eslintrc.json"}
        <br />
        &#123;
        <br />
        "extends": ["react-app", "react-app/jest", "prettier"],
        <br />
        "rules": &#123; 
        <br />
        "react/prop-types": "off" &#125;
        <br />
        &#125;
      </h1>
      <p>This is the first page of the frontend application.</p>
    </div>
  );
};

export default Home;