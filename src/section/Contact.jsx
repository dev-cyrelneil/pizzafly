import React, { useEffect } from "react";
import contact1 from "../assets/images/contact1.jpg";
import { useDarkMode } from "../DarkModeContext";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
    <section
      id="contact"
      className={`${
        darkMode ? "dark bg-slate-900" : "light bg-black"
      } w-full lg:px-20 px-10 lg:py-24 py-10 h-fit flex flex-col justify-center items-center bg-cover bg-center gap-14`}
      style={{ backgroundImage: `url(${contact1})` }}
    >
      <div className="lg:w-[80%] w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
        {/* MAP */}
        <div
          data-oas="zoom-in"
          data-aos-delay="200"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col justify-center items-center gap gap-4 border-s-8 border-red-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-red-500 dark:bg-red-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaMapLocationDot className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black dark:text-white font-bold uppercase">
            Reach Us
          </h1>
          <p className="text-center text-lg dark:text-white text-slate-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            quas.
          </p>
          <button className="bg-red-500 hover:bg-black text-white dark:hover:bg-white dark:hover:text-black  rounded-full px-6 py-3 font-bold uppercase">
            open map
          </button>
        </div>
        {/* EMAIL */}
        <div
          data-oas="zoom-in"
          data-aos-delay="200"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col justify-center items-center gap gap-4 border-s-8 border-red-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-red-500 dark:bg-red-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <MdEmail className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black dark:text-white font-bold uppercase">
            EMail Us
          </h1>
          <p className="text-center text-lg dark:text-white text-slate-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            quas.
          </p>
          <button className="bg-red-500 hover:bg-black text-white dark:hover:bg-white dark:hover:text-black  rounded-full px-6 py-3 font-bold lowercase">
          cyrelneil.dev@gmail.com
          </button>
        </div>
        {/* PHONE */}
        <div
          data-oas="zoom-in"
          data-aos-delay="200"
          className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col justify-center items-center gap gap-4 border-s-8 border-red-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-red-500 dark:bg-red-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaPhoneAlt className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black dark:text-white font-bold uppercase">
            Call Us
          </h1>
          <p className="text-center text-lg dark:text-white text-slate-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            quas.
          </p>
          <button className="bg-red-500 hover:bg-black text-white dark:hover:bg-white dark:hover:text-black rounded-full px-6 py-3 font-bold">
            +63 123 456 7890
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
