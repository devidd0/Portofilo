import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright">
        <Link to="/" className="text-white font-bold text-2xl mb-2">
          My Portofilio
        </Link>
        <div className="text-white">© 2021 Aziz Imranzade Rights Reserved</div>
      </div>
      <div className="footer-social-container">
        <a
          href="https://www.instagram.com/i.am.coder.e/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram className="footer-socail-item" />
        </a>
        <a
          href="https://github.com/IamEziz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithub className="footer-socail-item" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineYoutube className="footer-socail-item" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
