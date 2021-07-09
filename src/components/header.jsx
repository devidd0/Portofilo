import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  const [showMobileMenu,setShowMobileMenu]=useState(false)
  const handleMobileMenu = () =>
  {
    setShowMobileMenu(!showMobileMenu)
    console.log('clicked')
  }
  return (
    <div className="header-container">
      <Link to="/" className="header-logo">
        MyProtofilio
        <span className="text-xl text-[#666] ml-1">/1.0.4</span>
      </Link>
      <ul className={`main-nav ${showMobileMenu ? 'top-15 scale-100 lg:bg-transparent' : null}`}>
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
        <li onClick={handleMobileMenu}>
          <Link to="/contact" className="header-menu-item">
            Buy me Coffe
          </Link>
        </li>
      </ul>
      <div className="mobile-menu absolute border-2 border-white h-10 w-10 flex items-center justify-center top-4 right-6 lg:hidden z-40" onClick={handleMobileMenu}>
        <div className="w-[80%] h-[2px] bg-white my-2 absolute top-0 transition-all duration-300 transform "></div>
        <div className="w-[80%] h-[2px] bg-white my-2"></div>
        <div className="w-[80%] h-[2px] bg-white my-2 absolute bottom-0 transition-all duration-300 transform"></div>
      </div>
    </div>
  );
};

export default Header;
