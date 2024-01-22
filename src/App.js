import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import PostJob from "./pages/PostJobs.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Error from "./components/errors.jsx";
import { useState } from "react";
import Header from "./components/header.jsx";
import "./styles/App.css";
import Footer from "./components/footer.jsx";
import Blogposts from "./pages/Blogs.jsx";

function App() {
  const [isAuth, setIsAuth] = useState("false");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/postJobs" element={<PostJob />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/blogs" element={<Blogposts />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
