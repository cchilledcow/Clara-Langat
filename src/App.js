// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import "./App.css"; // Import the styles
import Quiz from "./components/Quiz";
import QuizIntermediate from "./components/QuizIntermediate";
import QuizAdvanced from "./components/QuizAdvanced";
import QuizPage from "./components/QuizPage";

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
            {/* Add routes for different games here */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
