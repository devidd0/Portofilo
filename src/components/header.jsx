import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  window.onload = () => {
    setProgress(100);
  };
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setProgress(100);
  };
  const [progress, setProgress] = useState(0);
  const barColor = "#3730A3";
  return (
    <div className="header-container">
      <LoadingBar
        color={barColor}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Link to="/" className="header-logo">
        MyProtofilio
        <span className="text-xl text-[#666] ml-1">/1.0.7</span>
      </Link>
      <ul
        className={`main-nav ${
          showMobileMenu ? "top-15 scale-100 lg:bg-transparent" : null
        }`}
      >
        <li onClick={handleMobileMenu}>
          <Link to="/" className="header-menu-item">
            Home
          </Link>
        </li>
        <li onClick={handleMobileMenu}>
          <Link to="/skills" className="header-menu-item">
            Skills
          </Link>
        </li>
        <li onClick={handleMobileMenu}>
          <Link to="/contact" className="header-menu-item">
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="mobile-menu absolute border-2 border-white h-10 w-10 flex items-center justify-center top-4 right-6 lg:hidden z-40"
        onClick={handleMobileMenu}
      >
        <div
          className={`w-[80%] h-[2px] bg-white my-2 absolute top-0 transition-all duration-300 transform ${
            showMobileMenu ? "-rotate-45 top-[10px]" : null
          }`}
        ></div>
        <div
          className={`w-[80%] transition-all h-[2px] bg-white my-2 ${
            showMobileMenu ? "bg-transparent" : null
          }`}
        ></div>
        <div
          className={`w-[80%] h-[2px] bg-white my-2 absolute bottom-0 transition-all duration-300 transform ${
            showMobileMenu ? "rotate-45 bottom-[10px]" : null
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Header;
