import { useState } from "react";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// pages
import Login from "./pages/Candidate/Login";
import Register from "./pages/Candidate/Register";
import HRLogin from "./pages/HR/HRLogin";
import Profile from "./pages/Candidate/Profile";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hrLogin" element={<HRLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
