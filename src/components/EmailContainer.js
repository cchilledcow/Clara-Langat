import React, { useState } from 'react';
import EmailTemplate from './EmailTemplate';
import mockEmails from '../api/MockEmails';

const EmailContainer = () => {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const currentEmailData = mockEmails[currentEmailIndex];

  const handleNextEmail = () => {
    if (currentEmailIndex < mockEmails.length - 1) {
      setCurrentEmailIndex(currentEmailIndex + 1);
    }
  };

  return (
    <div>
      <EmailTemplate emailData={currentEmailData} />
      <button onClick={handleNextEmail} disabled={currentEmailIndex === mockEmails.length - 1}>
        Next Email
      </button>
    </div>
  );
};

export default EmailContainer;