import React from "react";
import logoMarker from "../assets/logo_mark.png";
import logo from "../assets/logo_blk.png";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import instagram from "../assets/instagram.svg";
import Heading from "../components/Heading";
const FooterSection = () => {
  return (
    <section className="md:block hidden">
      <div className="grid grid-cols-5 ">
        <div className="col-span-3 border-t-2 border-l-2 border-r-2  border-black rounded-tl-3xl flex justify-between px-20 py-10">
          <div>
            <img src={logo} alt="" />
            <div className="flex gap-3 mt-3">
              <img src={twitter} alt="" />
              <img src={discord} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-end justify-end font-bold gap-2">
            <a href="#">Explore</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Community Guidelines</a>
            <a href="#">Careers</a>
            <a href="#">Help</a>
          </div>
        </div>
        <div className="col-span-2 border-t-2 border-r-2  border-black rounded-tr-3xl flex flex-col items-start px-10">
          <Heading text="SUBSCRIBE" />
          <p className="text-gray-500">
            Subscribe to get our latest Drops, Fresh news & Artists features...
          </p>
          <form className="flex gap-3 mt-3">
            <div className="flex items-center px-3 py-1 gap-2 border-2 border-gray-800 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                  fill="rgba(164,156,156,1)"
                />
              </svg>
              <input
                type="email"
                name=""
                id=""
                placeholder="email"
                className="p-2 focus:outline-none outline-none border-none"
              />
            </div>
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-2 border-black flex items-center justify-between py-3 px-10">
        <div className="flex gap-5 items-center ">
          <img src={logoMarker} alt="" />
          <a href="# " className="text-gray-700">
            Terms of Service
          </a>
          <a href="#" className="text-gray-700">
            Privacy
          </a>
        </div>
        <p className="text-gray-800">&copy; 2021 PolyOne</p>
      </div>
    </section>
  );
};

export default FooterSection;
