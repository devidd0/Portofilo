import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <Link
        to="/"
        className="header-logo"
      >
        MyProtofilio
        <span className="text-xl text-[#666] ml-1">/1.0.3</span>
      </Link>
      <ul className="flex">
        <li>
          <Link to="/" className="header-menu-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/skills" className="header-menu-item">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/contact" className="header-menu-item">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/contact" className="header-menu-item">
            Buy me Coffe
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
