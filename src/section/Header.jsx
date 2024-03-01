import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useDarkMode } from "../DarkModeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Pizza", path: "pizza" },
    { link: "Faq", path: "faq" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-gray-800" : "light bg-black"
      } w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-6 sticky top-0 z-50`}
    >
      <h1 className="text-white font-bold lg:text-5xl text-3xl">
        <a href="">
          Pizza <span className="italic text-red-500">Pies</span>
        </a>
      </h1>

      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-500 dark:hover:text-white hover:text-white"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <div
        id="header-icons"
        className="lg:flex hidden justify-center items-center gap-8 text-white"
      >
        <FaSearch className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />

        <IoPerson className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />

        <FaHeart className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />

        <div className="relative">
          <FaShoppingCart className="w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer" />
          <div className="bg-red-500 dark:bg-red-500 dark:text-black px-3 py-1 text-white rounded-full absolute -top-[28px] -right-[20px] text-sm font-bold">
            3
          </div>
        </div>
      </div>

      {/* mobile menu start */}
      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* toggle menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold hover:text-white w-full cursor-pointer p-3 rounded-lg hover:bg-red-500 text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
