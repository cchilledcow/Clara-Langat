import React, { useState } from 'react';
import EmailTemplate from './EmailTemplate';
import mockEmails from '../api/MockEmails';
import './EmailContainer.css'

const EmailContainer = () => {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const currentEmailData = mockEmails[currentEmailIndex];

  const handleNextEmail = () => {
    if (currentEmailIndex < mockEmails.length - 1) {
      setCurrentEmailIndex(currentEmailIndex + 1);
    }
  };

  const handleIsPhishing = () => {
    // Handle logic for "Is it phishing" button
    console.log('Is it phishing clicked');
  };

  const handleIsGenuine = () => {
    // Handle logic for "Is it genuine" button
    console.log('Is it genuine clicked');
  };

  return (
    <div>
      <EmailTemplate emailData={currentEmailData} />
      <div className="bottom-buttons">
        <button className="phishing-button" onClick={handleIsPhishing}>
          Phishing
        </button>
        <button className="genuine-button" onClick={handleIsGenuine}>
          Genuine
        </button>
      </div>
    </div>
  );
};

export default EmailContainer;