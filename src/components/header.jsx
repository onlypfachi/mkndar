import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";
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
  const [isAuth, setIsAuth] = useState("false");
  return (
    <header className="headerWrapper">
      <div className="navWrapper">
        <ul className="navLinks">
          {navlinks.map((link) => {
            return (
              <li>
                <Link to={link.href} className="link">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid h-16 mt-1 col-start-5 col-span-2 row-span-1 gird-cols-3">
        <img
          className="mx-auto h-10 mt-3 col-span-1"
          src={logo}
          alt="mukunda_logo"
        />
        <p className="col-start-2 col-span-2 color-sky-1200 h-10 text-2xl">
          mukunda.
        </p>
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
            "Tadiwa pfachi"
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
