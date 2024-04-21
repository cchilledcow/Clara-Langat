// EmailNotification.js
import React from 'react';
import './EmailNotification.css';

const EmailNotification = ({ message, onOpen, onCancel }) => {
  return (
    <div className="email-notification">
      <button className ="close-btn"  onClick={onCancel}>x</button>
      <div className="top-right">
        <h2 className="title">You have received a new Email from amazonlegit@gmail.com</h2>
      </div>
      <hr className="separator" />
      <div className="email-container1">
        <div className="email-icon1">📧</div>
        <div className="content-box1">
          <h3 className="email-title1">Mirracle hair growth cream! Be the first of 10 people to complete quiz to win!</h3>
          <p className="email-message1">{message}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="open-btn">Open</button>
        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EmailNotification;
