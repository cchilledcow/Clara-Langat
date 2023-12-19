import React from 'react';
import { Link } from 'react-router-dom';
import './QuizPage.css'; // Import the styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHourglassHalf, faFire } from '@fortawesome/free-solid-svg-icons';


const QuizPage = () => {
    return (
        <div className="app-container">
            <h1>How much do you know about cybersecurity?</h1>
            <p>Test your knowledge on cybersecurity topics and terms by taking our 10-question quiz.</p>
            <p>Select your level:</p>

            <div className="quizlevel-button">
                <Link to="/quiz" className="quiz-button easy">
                <FontAwesomeIcon icon={faCheck} />Easy</Link>
                <Link to="/quizintermediate" className="quiz-button intermediate">
                <FontAwesomeIcon icon={faHourglassHalf} />Intermediate</Link>
                <Link to="/quizadvanced" className="quiz-button advanced">
                <FontAwesomeIcon icon={faFire} />Advanced</Link>
            </div>
        </div>
    );
};

export default QuizPage;