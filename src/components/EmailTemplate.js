import React, { useState } from 'react';
import EmailNavBar from './EmailNavBar';
import './Email.css';

const EmailTemplate = ({ emailData }) => {
  const { Subject, Content, Links, Sender } = emailData;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const renderContent = () => {
    return Content.map((contentPart, index) => {
      if (contentPart.link) {
        // If it's a clickable link, render it as an <a> element
        return (
          <p key={index}>
            <a href={contentPart.link} target="_blank" rel="noopener noreferrer">
              {contentPart.text}
            </a>
          </p>
        );
      } else if (contentPart.isParagraph) {
        // If it should be rendered as a paragraph
        return <p key={index}>{contentPart.text}</p>;
      } else {
        // Otherwise, render as plain text
        return <div key={index}>{contentPart.text}</div>;
      }
    });
  };

  return (
    <div>
    <EmailNavBar />
    <div className="email-container">
      <div className="email-header">
        <div className="email-subject">{Subject}</div>
        <div className="sender-info">
          <div className="sender-avatar">
            <div className="avatar-placeholder">{Sender.avatar}</div>
          </div>
          <div className="sender-details">
            <span className="sender-name">{Sender.name}</span>
            <div className="to-me" onClick={toggleDropdown}>
              to me ▼
              {dropdownVisible && (
                <div className="dropdown-content">
                  <p>From: {Sender.email}</p>
                  <p>To: you@gmail.com</p>
                  <p>Date: {new Date().toLocaleDateString()}</p>
                  <p>Subject: {Subject}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grey-box">
        <div className="email-content">{renderContent()}</div>
      </div>
    </div>
  </div>
);
};

export default EmailTemplate;