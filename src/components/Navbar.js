import React from "react";
import logo from "../assets/logo.png";
import logoMobile from "../assets/logo-mobile.png";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
const Navbar = () => {
  return (
    <nav className="py-2 md:px-6 px-2 flex items-center justify-between shadow-md">
      <div className="flex items-center justify-center md:gap-8 gap-2">
        <div className="brand">
          <img src={logo} className="h-12 md:block hidden" alt="" />
          <img src={logoMobile} className=" md:hidden block" alt="" />
        </div>
        <button className="btn btn-primary">early access</button>
        <a href="#" className="link md:block hidden">
          About
        </a>
        <a href="#" className="link md:block hidden">
          Curators
        </a>
      </div>

      <div className="flex items-center justify-center md:gap-8 gap-4">
        <button className="btn btn-primary-outline md:block hidden">
          Submit
        </button>
        <div className="icon-btn md:block hidden">
          <img src={discord} className="w-6 " alt="" />
        </div>
        <div className="icon-btn md:block hidden">
          <img src={twitter} className="w-6" alt="" />
        </div>
        <button className="btn btn-white flex items-center gap-2">
          Connect
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        </button>
        <svg
          width="20"
          height="4"
          viewBox="0 0 20 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden block "
        >
          <path
            d="M2.5 0.125C1.46447 0.125 0.625 0.964466 0.625 2C0.625 3.03553 1.46447 3.875 2.5 3.875C3.53553 3.875 4.375 3.03553 4.375 2C4.375 0.964466 3.53553 0.125 2.5 0.125Z"
            fill="black"
          />
          <path
            d="M8.125 2C8.125 0.964466 8.96447 0.125 10 0.125C11.0355 0.125 11.875 0.964466 11.875 2C11.875 3.03553 11.0355 3.875 10 3.875C8.96447 3.875 8.125 3.03553 8.125 2Z"
            fill="black"
          />
          <path
            d="M15.625 2C15.625 0.964466 16.4645 0.125 17.5 0.125C18.5355 0.125 19.375 0.964466 19.375 2C19.375 3.03553 18.5355 3.875 17.5 3.875C16.4645 3.875 15.625 3.03553 15.625 2Z"
            fill="black"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
