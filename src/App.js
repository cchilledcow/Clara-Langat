// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import "./App.css"; // Import the styles
import Quiz from "./components/Quiz";
import QuizIntermediate from "./components/QuizIntermediate";
import QuizAdvanced from "./components/QuizAdvanced";
import QuizPage from "./components/QuizPage";
import EmailContainer from "./components/EmailContainer";
import GmailStatic from "./components/GmailStatic";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
    
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/quizintermediate" element={<QuizIntermediate />}></Route>
            <Route path="/quizadvanced" element={<QuizAdvanced />}></Route>
            <Route path="/quizpage" element={<QuizPage />}></Route>
            <Route path="/emailcontainer" element={<EmailContainer />}></Route>
            <Route path="/gmail" element={<GmailStatic />}></Route>
          
            {/* Add routes here */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
