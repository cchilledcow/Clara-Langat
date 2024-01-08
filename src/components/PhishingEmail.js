// PhishingEmail.js

import React, { useState } from 'react';
import './PhishingEmail.css';

const PhishingEmail = ({ onClick }) => {
  const [isPhishing, setIsPhishing] = useState(Math.random() < 0.5);

  const handleClick = () => {
    onClick(isPhishing);
  };

  const emailContent = isPhishing ? (
    <React.Fragment>
      <p className="email-greeting">Dear User,</p>
      <p>Your Gmail account has been compromised. Please click the link below to secure your account:</p>
      <a href="https://fake-phishing-site.com/secure" target="_blank" rel="noopener noreferrer">
        Secure My Account
      </a>
      <p>Thank you,</p>
      <p>The Gmail Team</p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <p className="email-greeting">Hello User,</p>
      <p>We notice you've been using Gmail actively. No action is required on your part at the moment.</p>
      <p>If you have any questions or concerns, feel free to reach out to our support team.</p>
      <p>Best regards,</p>
      <p>The Gmail Team</p>
    </React.Fragment>
  );

  return (
    <div className={`phishing-email ${isPhishing ? 'phishing' : 'legitimate'}`}>
      <div className="email-header">
        <span className="email-from">Gmail Team</span>
        <span className="email-date">Dec 24, 2023</span>
      </div>
      <div className="email-body">{emailContent}</div>
      <button className="phishing-button" onClick={handleClick}>
        Is this phishing?
      </button>
    </div>
  );
};

export default PhishingEmail;
