import React, { useState } from "react";
import './Gmail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPrint, faWindowMaximize, faStar, faShare, faEllipsisVertical, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true,});;

const Gmail = () => {
  const [generatedEmail, setGeneratedEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [extractedLinks, setExtractedLinks] = useState([]);


  const generateEmail = async () => {
    setIsLoading(true);
    setFeedback(null); // Reset feedback to null
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a cybersecurity expert tasked with generating educational materials to help people identify phishing emails. Your task is to create either a genuine or phishing email based on the provided information. If generating a genuine email, ensure the following: The sender's email address and domain are legitimate and well-known (e.g., company@example.com, friend@email.com) The subject line is relevant and not suspicious (e.g., 'Meeting Reminder', 'Photo from Vacation') The email content is professionally written and does not contain urgent calls to action or requests for sensitive information Any links or attachments are from trusted sources and do not raise suspicionIf generating a phishing email, you can include common phishing tactics such as: Spoofed or suspicious sender email addresses Urgent or threatening language in the subject line or content Requests for sensitive information (e.g., passwords, credit card details)Suspicious links or attachments that could lead to malicious websites or downloads Generate a subject, sender and receiver details, and the email content. Do not specify whether the email is genuine or phishing. Do not use placeholders that give out what email you generating; instead, generate links that lead nowhere. You are free to come up with any scenario."
          }
        ],
        model: "gpt-4",
        max_tokens: 300,
        temperature: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      console.log("Completion response:", completion);

      if (completion && completion.choices && completion.choices.length > 0) {
        const emailContent = completion.choices[0].message.content.trim();

        // Extract subject from email content
        const subjectMatch = emailContent.match(/Subject: (.*)/);
        const subject = subjectMatch ? subjectMatch[1] : "No Subject";

        // Remove subject from email content
        const emailWithoutSubject = emailContent.replace(/Subject: .*\n/, "");
        
        // Extract links from email content
        const linkRegex = /(https?:\/\/|www\.)[\S]+/gi;
        const extractedLinks = emailWithoutSubject.match(linkRegex) || [];

        setGeneratedEmail({ subject, content: emailWithoutSubject });
        setExtractedLinks(extractedLinks); // Update extractedLinks state
      } 
      else {

        console.error("Invalid completion response:", completion);

      }

      setIsLoading(false);
    } catch (error) {

      console.error("Error generating email:", error);
      setIsLoading(false);

    }
  };

  const handleSelection = async (isPhishing) => {
    setIsLoading(true);
    setFeedback(null);

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
            "You are providing phishing awareness training. Analyze the email and the user's judgment of whether it is genuine or a phishing attempt. Give concise feedback explaining: If their judgment was correct or not.The key elements that make the email legitimate or a likely phishing attempt (e.g., sender's email address, subject line, content, links, or attachments). Any other insights to help them better identify phishing emails in the future.Use clear, easy-to-understand language. Keep the feedback focused and actionable, aiming to educate rather than criticize."
          },
          {
            role: "user",
            content: `Email Content:\n${generatedEmail.content}\n\nUser Selection: ${isPhishing ? "Phishing" : "Genuine"}`,
          },
        ],
        model: "gpt-4",
        max_tokens: 300,
        temperature: 1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      if (completion && completion.choices && completion.choices.length > 0) {
        const feedback = completion.choices[0].message.content.trim();
        setFeedback(feedback);
      } 
      else {

        console.error("Invalid completion response:", completion);
        
      }
    } catch (error) {
      console.error("Error getting feedback:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="email-feedback-container">
      <div className="email-container">
        <div className="macbook-icons">
          <FontAwesomeIcon icon={faCircle} className="red" />
          <FontAwesomeIcon icon={faCircle} className="yellow" />
          <FontAwesomeIcon icon={faCircle} className="green" />
        </div>
        <div className="email-header">
          <div className="email-subject">{generatedEmail ? generatedEmail.subject : "No emails to display"}</div>
          <div className="email-actions">
            <button onClick={generateEmail}>Generate Email</button>
            <FontAwesomeIcon icon={faPrint} />
            <FontAwesomeIcon icon={faWindowMaximize} />
          </div>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : generatedEmail && (
          <React.Fragment>
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
            <div className="email-content-box">
              <div className="email-content">
              {generatedEmail.content.split('\n').map((line, index) => (
                <span key={`line-${index}`}>
                  {line.split(/\s+/).map((chunk, chunkIndex) => {
                    const isLink = extractedLinks.some((link) => chunk.includes(link));
                    return isLink ? (
                      <a
                        key={`${chunk}-${chunkIndex}`}
                        href={chunk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="email-link"
                        onMouseOver={(e) => {
                          e.preventDefault();
                          // Handle link hover
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle link click
                        }}
                      >
                        {chunk}
                      </a>
                    ) : (
                      `${chunk} `
                    );
                  })}
                  <br />
                </span>
              ))}
              </div>
              <div className="email-attachments">
                {/* Attachments */}
              </div>
            </div>
          </React.Fragment>
        )}
        <div className="phishing-or-genuine-buttons">
          <button onClick={() => handleSelection(true)}>Phishing</button>
          <button onClick={() => handleSelection(false)}>Genuine</button>
        </div>
      </div>
      <div className="feedback-section">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{feedback}</p>
        )}
      </div>
    </div>
  );
};

export default Gmail;