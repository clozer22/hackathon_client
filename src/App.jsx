import { useState } from "react";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// pages
import Login from "./pages/Candidate/Login";
import Register from "./pages/Candidate/Register";
import CandidateProfile from "./pages/Candidate/Candidate_Profile";
import HRLogin from "./pages/HR/HRLogin";
import Profile from "./pages/HR/Profile";
import Calendar from "./pages/HR/CalendarSchedule";
import Reviews from "./pages/HR/Reviews";
import Resume from "./pages/HR/Resume";
import Assessment from "./pages/Candidate/Assessment";
import ResultPage from "./pages/Candidate/ResultPage";
import AddRole from "./pages/Candidate/AddRole";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/resultPage" element={<ResultPage />} />
          <Route path="/candidateProfile" element={<CandidateProfile />} />
          <Route path="/addrole" element={<AddRole />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hrLogin" element={<HRLogin />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
