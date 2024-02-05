import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './EmailNavBar.css';

const EmailNavBar = () => {
  return (
    <div className="navbar">
      <div className="icons">
      <span className="icon archive" data-tooltip="Archive"><FontAwesomeIcon icon={faArchive} /></span>
      <span className="icon spam" data-tooltip="Report Spam"><FontAwesomeIcon icon={faExclamationTriangle} /></span>
      <span className="icon delete" data-tooltip="Delete"><FontAwesomeIcon icon={faTrashAlt} /></span>
      </div>
      <div className="buttons">
      <button className="nav-button front-button" data-tooltip="Previous">&#60;</button>
      <button className="nav-button back-button" data-tooltip="Next">&#62;</button>
    </div>
    </div>
  );
};

export default EmailNavBar;