import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-primary text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-accent py-7">
        <h1 
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-secondary">Subscribe </span>to our newsletter
          
        </h1>
        
        <div >
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-secondary dark:bg-primary hover:secondary duration-300 px-5 py-2.5 
           rounded-md text-white md:w-auto w-full"
          >
            Subscribe
          </button>
        </div> 
          </div>
          
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2025 Fcs Futminna. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;