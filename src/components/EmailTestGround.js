import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPrint, faWindowMaximize, faStar, faShare, faEllipsisVertical, faCaretDown, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import emaildata from "../api/emaildata";
import './Gmail.css';

const EmailTestGround = () => {
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [score, setScore] = useState(0);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);


  const currentEmail = emaildata[currentEmailIndex];

  useEffect(() => {
    // Reset answer submission status when moving to the next email
    setAnswerSubmitted(false);
  }, [currentEmailIndex]);

   const handleNextEmail = () => {
    if (currentEmailIndex < emaildata.length - 1) {
      setCurrentEmailIndex(currentEmailIndex + 1);
      setFeedback(null);
      setShowResult(false); // Reset showResult state when moving to the next email
    } else {
      // The user has reached the last email, show the results
      setShowResult(true);
    }
  };

  const handlePhishing = () => {
    if (!answerSubmitted) {
      setAnswerSubmitted(true);
    if (currentEmail.isPhishing === "yes") {
      switch(currentEmailIndex) {
        case 0:
          setFeedback('Correct! This email is indeed phishing. The email contains a suspicious link at "link.acmecorp.com/reset-password" that does not match the sender\'s domain of "acmecorp.com". This is a common tactic used in phishing emails to steal account credentials. Additionally, the email has a sense of urgency, asking you to click the link immediately to "secure your account", which is another red flag.');
          break;
        case 2:
          setFeedback('Correct! This email is indeed phishing. The link at "link.deliveryexpress.com/verify" is suspicious and does not match the sender\'s domain of "deliveryexpress.com". This is a common tactic used in phishing emails to steal personal information. The email also has poor grammar and spelling mistakes, which are often indicators of a phishing attempt.');
          break;
        case 4:
          setFeedback('Correct! This email is indeed phishing. The link at "link.example-school.edu/reset-password" is suspicious and does not match the sender\'s domain of "example-school.edu". This is a phishing attempt to steal your school email credentials. The email also has a generic greeting of "Dear Jane Doe" instead of a personalized message, which is another common tactic used in phishing emails.');
          break;
        case 5:
          setFeedback('Correct! This email is indeed phishing. The link at "link.example-bank.com/verify" is suspicious and does not match the sender\'s domain of "example-bank.com". This is a phishing attempt to steal your bank account information. The email also has a sense of urgency, asking you to click the link "immediately" to prevent disruption to your services.');
          break;
        default:
          setFeedback('Correct! This email is indeed phishing. The email contains suspicious links and other phishing tactics, such as a sense of urgency or poor grammar.');
      }
      setScore(score + 1);
    } else {
      setFeedback('Oops! You marked this email as phishing, but it is genuine. No suspicious links or other phishing tactics were detected.');
    }
    setShowResult(true); // Show result after submitting answer
  }
  };
  
  const handleGenuine = () => {
    if (!answerSubmitted) {
      setAnswerSubmitted(true);
    if (currentEmail.isPhishing === "no") {
      switch(currentEmailIndex) {
        case 1:
          setFeedback('Correct! This email is indeed genuine. The email has a personalized greeting, no suspicious links, and the sender\'s domain matches the email address, all of which are indicators of a legitimate communication.');
          break;
        case 3:
          setFeedback('Correct! This email is indeed genuine. The email has a professional tone, no suspicious links, and the sender\'s domain matches the email address, which are all signs of a legitimate email from the school.');
          break;
        case 4:
          setFeedback('Correct! This email is indeed genuine. The email has a personalized greeting, no suspicious links, and the sender\'s domain matches the email address, all of which are indicators of a legitimate communication from the school.');
          break;
        case 6:
          setFeedback('Correct! This email is indeed genuine. The email has a friendly, conversational tone, no suspicious links, and the sender\'s domain matches the email address, which are all signs of a legitimate personal communication.');
          break;
        default:
          setFeedback('Correct! This email is indeed genuine. The email exhibits no signs of phishing tactics and appears to be a legitimate communication.');
      }
      setScore(score + 1);
    } else {
      switch(currentEmailIndex) {
        case 0:
          setFeedback('Oops! You marked this email as genuine, but it is phishing. The link at "link.acmecorp.com/reset-password" is suspicious and does not match the sender\'s domain of "acmecorp.com". Additionally, the email has a sense of urgency, asking you to click the link immediately to "secure your account", which is a common tactic used in phishing emails.');
          break;
        case 2:
          setFeedback('Oops! You marked this email as genuine, but it is phishing. The link at "link.deliveryexpress.com/verify" is suspicious and does not match the sender\'s domain of "deliveryexpress.com". The email also has poor grammar and spelling mistakes, which are often indicators of a phishing attempt.');
          break;
        case 5:
          setFeedback('Oops! You marked this email as genuine, but it is phishing. The link at "link.example-bank.com/verify" is suspicious and does not match the sender\'s domain of "example-bank.com". The email also has a sense of urgency, asking you to click the link to "prevent any disruption to your services", which is a common tactic used in phishing emails.');
          break;
        default:
          setFeedback('Oops! You marked this email as genuine, but it is phishing. The email contains suspicious links and other phishing tactics, such as a sense of urgency or poor grammar.');
      }
    }
    setShowResult(true); // Show result after submitting answer
  }
  };

  const handleLinkMouseEnter = (link) => {
    if (currentEmail.isPhishing === "yes") {
      // Replace  link destination for phishing emails when hovered
      setHoveredLink(link);
    }
  };

  const handleLinkMouseLeave = () => {
    // Reset hovered link when mouse leaves
    setHoveredLink(null);
  };


  const reset = () => {
    setCurrentEmailIndex(0);
    setFeedback(null);
    setScore(0);
    setAnswerSubmitted(false);
    setShowResult(false);
  };

  const result = score;


  return (
    <div className="email-overall-container">
      <div className="email-container">
        <div className="macbook-icons">
          <FontAwesomeIcon icon={faCircle} className="red" />
          <FontAwesomeIcon icon={faCircle} className="yellow" />
          <FontAwesomeIcon icon={faCircle} className="green" />
        </div>
        <div className="email-header">
          <div className="email-subject">{currentEmail.subject}</div>
          <div className="email-actions">
            <FontAwesomeIcon icon={faPrint} />
            <FontAwesomeIcon icon={faWindowMaximize} />
          </div>
        </div>
        {/* Email Details */}
        <div className="email-details">
          <div className="email-time">
            <div className="time">Date/Time</div>
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
        {/* Email Content */}
        <div className="email-content-box">
          <div className="email-content">
            {currentEmail.content.map((item, index) =>
              item.link ? (
                <a
                  key={`${item.text}-${index}`}
                  href={hoveredLink === item.link && currentEmail.isPhishing === "yes" ? "http://www.example.com/phishing" : item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-link"
                  onMouseEnter={() => handleLinkMouseEnter(item.link)}
                  onMouseLeave={handleLinkMouseLeave}
                >
                  {item.text}
                </a>
              ) : (
                `${item.text} `
              )
            )}
          </div>
          {/* Email Attachments */}
          <div className="email-attachments">
            {currentEmail.attachments.map((attachment, index) => (
              <div key={index} className="attachment">
                <FontAwesomeIcon icon={faFilePdf} />
                <a href={attachment.url} target="_blank" rel="noopener noreferrer">{attachment.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="next-email-button" onClick={handleNextEmail}>Next Email</button>
      {/* Phishing and Genuine Buttons */}
      <div className="buttons-row">
        <button className="phishing-button" onClick={handlePhishing} disabled={answerSubmitted}>Phishing</button>
        <button className="genuine-button" onClick={handleGenuine} disabled={answerSubmitted}>Genuine</button>
      </div>
      {/* Feedback */}
      {feedback && (
        <div className="feedback-message">
          {feedback}
        </div>
      )}
      {/* Display Results */}
      {answerSubmitted && showResult && (
        <div className="results-container">
          <h1>Result</h1>
          <div
            className="result-container"
            style={
              result > 3.5
                ? { border: "3px solid #4cceac", boxShadow: "0,0,1rem #4cceac" }
                : { border: "3px solid #db4f4a", boxShadow: "0,0,1rem #db4f4a" }
            }
          >
            <h1 style={result > 3.5 ? { color: "#4cceac" } : { color: "#db4f4a" }}>
              {score}/7
            </h1>
          </div>
          <button onClick={reset}>Try again</button>
        </div>
      )}
      {/* End of questions message */}
      {currentEmailIndex === emaildata.length - 1 && (
        <div className="end-of-questions-message">
          <p>This is the last email. Answer to see your results.</p>
        </div>
      )}
    </div>
  );
}  

export default EmailTestGround;