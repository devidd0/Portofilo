import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex w-full h-[4.5rem] bg-[#222222] border-b-2 text-white justify-between items-center px-24">
      <Link
        to="/"
        className="logo font-bold text-2xl hover:text-indigo-400 transition-colors"
      >
        MyProtofilio
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
