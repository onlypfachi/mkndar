import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css"; // Import the header styles
import Avatar from "./avatar";
import logo from "../images/chrome_UNGhGohFWN.png";

function Header() {
  const navlinks = [
    {
      id: 1,
      href: "/",
      title: "Home",
    },
    {
      id: 2,
      href: "/jobs",
      title: "Explore Jobs",
    },
    {
      id: 3,
      href: "/postJobs",
      title: "Post Jobs",
    },
    {
      id: 4,
      href: "/blogs",
      title: "Blogs",
    },
    {
      id: 5,
      href: "/about",
      title: "About Us",
    },
  ];
  const loggedIn = localStorage.getItem("isAuth");
  const [isAuth, setIsAuth] = useState(loggedIn);
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  }

  return (
    <header className="headerWrapper">
      {/* Navigation Links */}
      <nav className="navWrapper">
        <ul className="navLinks">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link to={link.href} className="link">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Logo */}
        <div className="logoWrapper">
          <img className="logo" src={logo} alt="mukunda_logo" />
          <p className="logoTypo">mukunda.</p>
        </div>
      </nav>
      
      {/* Avatar and User Controls */}
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
            "Tadiwa pfachi"
          )}
        </p>
        <button className="signupBtn" onClick={handleLogout}>
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
