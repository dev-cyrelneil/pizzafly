import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaArrowDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <section
        className={`${
          darkMode ? "dark bg-gray-900" : "light bg-black"
        } w-full lg:px-20 px-10 py-10 h-fit flex flex-col justify-center items-center gap-6`}
      >
        <h1 className="text-white font-bold text-5xl">
          Pizza <span className="text-red-500 italic">Fly</span>
        </h1>
        <p className="text-xl text-white text-salte-100 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          eaque?
        </p>
        <div id="icon-box" className="flex justify-center items-center gap-4">
          {/* Facebook */}
          <div
            id="social-icons"
            className="p-3 rounded-full bg-red-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaFacebook className="w-[25px] h-[25px]" />
          </div>
          {/* Instagram */}
          <div
            id="social-icons"
            className="p-3 rounded-full bg-red-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaInstagram className="w-[25px] h-[25px]" />
          </div>
          {/* Twitter */}
          <div
            id="social-icons"
            className="p-3 rounded-full bg-red-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaTwitter className="w-[25px] h-[25px]" />
          </div>
          {/* Youtube */}
          <div
            id="social-icons"
            className="p-3 rounded-full bg-red-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaYoutube className="w-[25px] h-[25px]" />
          </div>
        </div>
      </section>

      {/* Dark Mode Toggle Button */}
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 rounded-full bg-red-500 fixed lg:bottom-6 left-6 bottom-6"
        >
          {darkMode ? (
            <FaMoon size={30} className="text-black" />
          ) : (
            <FaSun size={30} className="text-black" />
          )}
        </button>
      </div>

      {/* scroll to top button */}
      <div
        id="icon-box"
        className="bg-red-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
