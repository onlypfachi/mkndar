import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
import Jobs from "./pages/jobs.js";
import PostJob from "./pages/postJobs.js";
import About from "./pages/about.js";
import Login from "./pages/login.js";
import Error from "./components/errors.js";
import { useState } from "react";
import Header from "./components/header.js";
import "./styles/App.css";

function App() {
  const [isAuth, setIsAuth] = useState("false");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about Us" element={<About />} />
        <Route path="/postJobs" element={<PostJob />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
