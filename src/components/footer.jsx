import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
const Footer = () => {
  return (
    <div className="flex items-center justify-between px-24 bg-[#444] h-24">
      <div className="copyright">
        <div className="text-white font-bold text-2xl mb-2">My Portofilio</div>
        <div className="text-white">© 2011 John Doe All Rights Reserved</div>
      </div>
      <div className="social flex items-center text-4xl text-white justify-between w-44">
        <a href="https://www.instagram.com/i.am.coder.e/" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram className="cursor-pointer transition-all transform hover:scale-125" />
        </a>
        <a href="https://github.com/IamEziz" target="_blank" rel="noopener noreferrer">
          <VscGithub className="cursor-pointer transition-all transform hover:scale-125" />
        </a>
        <a href="https://www.youtube.com/channel/UCpERt5A7SNd7s5XNAj2mGmw" target="_blank" rel="noopener noreferrer">
          <AiOutlineYoutube className="cursor-pointer transition-all transform hover:scale-125" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
