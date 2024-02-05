// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the styles

const LandingPage = () => {
    return (
        <div className="app-container">
            <h1>Welcome to Security Awareness Games</h1>
            <p>
                Enhance your cybersecurity knowledge through engaging games that simulate real-world scenarios.
            </p>
            <p>
                Playing security games can improve your ability to identify phishing attempts, create strong passwords, and understand common cybersecurity threats.
            </p>
            <ul>
                <li><Link to="/emailcontainer">Phishing Game</Link></li>
                <li><Link to="/password-checker">Password Strength Checker</Link></li>
                <li><Link to="/quizpage">Cybersecurity Quiz Game</Link></li>
            </ul>
        </div>
    );
};

export default LandingPage;