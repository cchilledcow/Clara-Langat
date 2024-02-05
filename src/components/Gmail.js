import React, { useState } from "react";
import './Gmail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPrint, faWindowMaximize, faStar, faShare, faEllipsisVertical, faCaretDown, faArrowLeft, faArrowRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Gmail = ({ emails }) => {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);

  const navigate = (direction) => {
    const newIndex = direction === 'next' ? currentEmailIndex + 1 : currentEmailIndex - 1;
    setCurrentEmailIndex(Math.max(0, Math.min(newIndex, emails.length - 1)));
  };

  const currentEmail = emails[currentEmailIndex];

  if (!currentEmail) {
    return <div>No emails to display</div>;
  }

  const { sender, subject, date, content, attachments } = currentEmail;

  return (
    <div className="email-container">
      <div className="macbook-icons">
        <FontAwesomeIcon icon={faCircle} className="red" />
        <FontAwesomeIcon icon={faCircle} className="yellow" />
        <FontAwesomeIcon icon={faCircle} className="green" />
      </div>
      <div className="email-header">
        <div className="email-subject">{subject}</div>
        <div className="email-actions">
          <FontAwesomeIcon icon={faPrint} />
          <FontAwesomeIcon icon={faWindowMaximize} />
        </div>
      </div>
      <div className="email-details">
        <div className="sender-info">
          <div className="sender-name">{sender.name}</div>
          <div className="sender-email">&lt;{sender.email}&gt;</div>
        </div>
        <div className="email-time">
          <div className="time">{date}</div>
          <div className="actions">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faShare} />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
      <div className="email-to-me">
        <span>To me</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div className="email-content-box">
        <div className="email-content">{content}</div>
      
      <div className="email-attachments">
      {attachments && attachments.map((attachment, index) => (
        <div key={index} className="attachment">
          <FontAwesomeIcon icon={faFilePdf} />
          <span>{attachment.name}</span>
        </div>
      ))}
    </div>
    </div>
      <div className="email-navigation">
        <button onClick={() => navigate('prev')} disabled={currentEmailIndex === 0}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={() => navigate('next')} disabled={currentEmailIndex === emails.length - 1}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Gmail;