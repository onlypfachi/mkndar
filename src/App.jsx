import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home  from "./pages/Home";
import Jobs from "./pages/Jobs.jsx";
import PostJob from "./pages/PostJob.jsx";
import About from "./pages/about";
import Login from "./pages/Login";
import Error from "./components/errors";
import "./styles/App.css";
import Blogposts from "./pages/Blogs";
import PrimaryLayout from "./layouts/Primarylayout";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrimaryLayout >
              <Home />
            </PrimaryLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PrimaryLayout>
              <About />
            </PrimaryLayout>
          }
        />
        <Route
          path="/postJobs"
          element={
            <PrimaryLayout>
              <PostJob />
            </PrimaryLayout>
          }
        />
        <Route
          path="/jobs"
          element={
            <PrimaryLayout>
              <Jobs />
            </PrimaryLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PrimaryLayout>
              <Login setIsAuth={setIsAuth} />
            </PrimaryLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <PrimaryLayout>
              <Blogposts />
            </PrimaryLayout>
          }
        />
        <Route
          path="*"
          element={
            <PrimaryLayout>
              <Error />
            </PrimaryLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
