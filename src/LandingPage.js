// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the styles
import AnimatedGif from './Animatedgif';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="left-content">
                <h1>Welcome to this Phishing Awareness Challenge</h1>
                <p>Phishing attacks are the most prevalent cyber threats today. This game helps you learn how to identify phishing attempts and keep your data safe.</p>

                <ul>
                    <li><Link to="/mainpage" className="button">Uncover the Tricks of Phishing Scams</Link></li>
                    <p>Discover the common tactics used by scammers, learn how to spot the red flags, and equip yourself with the knowledge to protect against these attacks.</p>

                    <li><Link to="/gmail" className="button">Test Your Skills</Link></li>
                    <p>Put your phishing detection skills to the test! This challenge allows you to go interact with simulated emails using OpenAI's GPT-4 API. See if you can distinguish between genuine interactions from the malicious attempts.</p>
                </ul>
            </div>
            <div className="gif">
                <AnimatedGif src="https://d3p8e1mvy30w84.cloudfront.net/assets/images/hero/Phishing-Hero-Moving.gif" alt="Animated GIF" />
            </div>
        </div>
    );
};

export default LandingPage;
