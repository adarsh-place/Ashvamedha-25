import React from "react";
import {
  AiOutlineMail,
} from "react-icons/ai";
import {
  BiSolidPhoneCall,
  BiCopyright,
} from "react-icons/bi";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Footer() {
  const handleRedirect = (platform) => {
    const urls = {
      1: "https://www.instagram.com/ashvamedha_iitbbs/",
      2: "https://www.facebook.com/AshvamedhaIITBBS/",
      3: "https://www.linkedin.com/company/ashvamedha-iit-bhubaneswar/mycompany/",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <footer className="footer w-full text-white border-t-2 border-[#f8f3ef] flex flex-col items-center justify-center py-10">
      {/* Top Section */}
      <div className="container w-full flex flex-col md:flex-row items-center justify-around text-center md:text-left space-y-10 md:space-y-0">
        {/* Left */}
        <div className="left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-[#FF6D02]">ASHVA</span>
            <span className="text-white">MEDHA</span>
          </h1>
          <h2 className="text-lg opacity-90 mb-6">
            The Annual Sports Fest of IIT Bhubaneswar
          </h2>

          {/* Social Media */}
          <div className="flex justify-center md:justify-start space-x-4">
            <div
              onClick={() => handleRedirect(1)}
              className="p-3 border-2 border-gray-400 rounded-lg text-pink-600 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaInstagram className="text-2xl" />
            </div>
            <div
              onClick={() => handleRedirect(2)}
              className="p-3 border-2 border-gray-400 rounded-lg text-blue-600 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaFacebookSquare className="text-2xl" />
            </div>
            <div
              onClick={() => handleRedirect(3)}
              className="p-3 border-2 border-gray-400 rounded-lg text-sky-600 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaLinkedin className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center">
          <img
            src="ashvamedhaLogo.png"
            alt="Ashvamedha Logo"
            className="w-36 h-36 object-contain hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Right */}
        <div className="right text-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-white">Address</h2>
          <p className="flex items-center mb-3 text-lg">
            <HiLocationMarker className="mr-2 text-2xl" />
            Gymkhana Office, IIT Bhubaneswar
          </p>
          <p className="flex items-center mb-3 text-lg">
            <BiSolidPhoneCall className="mr-2 text-2xl" /> +91 7976512192
          </p>
          <p className="flex items-center mb-3 text-lg">
            <AiOutlineMail className="mr-2 text-2xl" />
            coord.ashvamedha@iitbbs.ac.in
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30 mt-8 pt-4 flex items-center justify-center space-x-2 text-gray-400">
        <BiCopyright />
        <p className="text-sm">
          Ashvamedha, <span className="text-white">All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
