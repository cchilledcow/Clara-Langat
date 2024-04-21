import React from "react";
import { Link } from "react-router-dom";
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>This is the Phishing Education Platform</h1>
      <p>Choose an option below:</p>
      
      <ul>
        <li><Link to="/phishingeducation" className="button">Learning space</Link></li>
        <p>In the Learning Space, you will learn about various phishing tactics through interactive slides.</p>

        <li><Link to="/testground" className="button">Practice Your Skills</Link></li>
        <p>Test your phishing awareness skills by identifying phishing attempts with practice emails.</p>
       </ul>  
    </div>
  );
};

export default MainPage;