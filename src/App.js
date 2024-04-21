// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import "./App.css"; // Import the styles
import Quiz from "./components/Quiz";
import Gmail from "./components/Gmail";
import EmailTestGround from "./components/EmailTestGround";
import PhishingEducation from "./components/PhishingEducation";
import MainPage from "./components/Mainpage";
import EmailNotification from "./components/EmailNotification";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
    
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/landing" element={<LandingPage />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/gmail" element={<Gmail />}></Route>
            <Route path="/testground" element={<EmailTestGround />}></Route>
            <Route path="/phishingeducation" element={<PhishingEducation />}></Route>
            <Route path="/mainpage" element={<MainPage />}></Route>
            <Route path="/emailnotification" element={<EmailNotification />}></Route>
          
          
            {/* Add routes here */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
