import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";
import Avatar from "./avatar";
import Logo from "./logo";

function Header() {
  const [isAuth, setIsAuth] = useState("false");
  return (
    <header className="headerWrapper">
      <div className="navWrapper">
        <ul className="navLinks">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="link">
              Explore Jobs
            </Link>
          </li>
          <li>
            <Link to="/postJobs" className="link">
              Post Jobs
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="logoWrapper">
        <div className="logo">
          <Logo />
        </div>
        <h3 className="logoTypo">mukunda.</h3>
      </div>
      <div className="buttonWrapper">
        <div className="avatar">
          <Avatar />
        </div>
        <p className="userName">
          {!isAuth ? (
            <Link to="/login" className="link">
              Please login
            </Link>
          ) : (
            "Tadiwa"
          )}
        </p>
        <button className="signupBtn">
          {!isAuth ? (
            <Link to="/login" className="link">
              Sign up
            </Link>
          ) : (
            <Link to="/login" className="link">
              Sign out
            </Link>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
