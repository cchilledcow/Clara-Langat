import React from 'react';
import './EmailNavBar.css';

const EmailNavBar = () => {
  return (
    <div className="navbar">
      <div className="action-icon">Archive</div>
      <div className="action-icon">Report Spam</div>
      <div className="action-icon">Delete</div>
    </div>
  );
};

export default EmailNavBar;