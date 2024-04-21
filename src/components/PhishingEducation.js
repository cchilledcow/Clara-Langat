import React, { useState } from "react";
import './PhishingEducation.css';

import EmailNotification from "./EmailNotification"; 

const PhishingEducation = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [attachmentUrl, setAttachmentUrl] = useState(null);

  const slides = [
    {
      title: "Phishing emails",
      content: "These are malicious emails created by cyber criminals disguised as legitimate communications from real people or companies. Cyber criminals send out these emails in an attempt to make you hand over private information or credentials.",
    },
    {
      title: "How to spot phishing emails",
      content: "Unexpected emails should be analyzed with caution. Check the domain name to see if it looks like the email is from a legit source.",
      example: "Example: View the email. The sender is trying to make it look like they are the Amazon company",
      attachmentUrl: "email notification"
    },
    {
      title: "How to spot phishing emails",
      content: "Look out for mistakes or spelling errors, a rare occurrence in emails from legitimate companies.",
      example: "Example: View the email. The cyber criminal misspelt miracle as 'mirracle'",
      attachmentUrl: "email notification"
    },
    {
      title: "How to spot phishing emails",
      content: "If an email creates a sense of urgency, take a step back and consider whether it is trying to get you to overlook your good judgment.",
      example: "Example: View the email. There is a sense of urgency created by telling you to be the first among 10 to win.",
      attachmentUrl: "email notification"
    },
  ];

  const handleNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleViewAttachment = (url) => {
    setAttachmentUrl(url);
  };

  return (
    <div className="phishing-education-container">
      <div className="teacher">
        <img src="https://www.pngall.com/wp-content/uploads/4/Teacher-PNG-Free-Image.png" alt="Teacher pointing" />
      </div>
      <div className="slide">
        <h2>{slides[currentSlideIndex].title}</h2>
        <p>{slides[currentSlideIndex].content}</p>
        <p>{slides[currentSlideIndex].example}</p>
        {slides[currentSlideIndex].attachmentUrl && (
          <div className="attachment-preview">
            <button onClick={() => handleViewAttachment(slides[currentSlideIndex].attachmentUrl)}>View Attachment</button>
          </div>
        )}
      </div>
      <div className="controls">
        <button onClick={handlePrevSlide} disabled={currentSlideIndex === 0}>Previous</button>
        <button onClick={handleNextSlide} disabled={currentSlideIndex === slides.length - 1}>Next</button>
      </div>
      {attachmentUrl && (
        <div className="email-notification-container">
          <EmailNotification
            message="Email message here"
            attachmentUrl={attachmentUrl}
            onOpen={() => setAttachmentUrl(null)} // Close email notification
            onCancel={() => setAttachmentUrl(null)} // Close email notification
          />
        </div>
      )}
    </div>
  );
};

export default PhishingEducation;
