import React, { useEffect } from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import about1 from "../assets/images/about1.jpg";
import { useDarkMode } from "../DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      {/* Box */}
      <section
        id="about"
        className={`${
          darkMode ? "dark bg-black" : "light bg-light"
        } w-full lg:px-20 px-10 lg:py-20 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10`}
      >
        {/* About */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="border-[4px] border-red-600 dark:border-red-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 dark:hover:border-gray-800 dark:hover:bg-gray-800 cursor-pointer"
        >
          <img
            src={icon1}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-black dark:text-white text-2xl font-lg text-center uppercase">
            about us
          </h1>
        </div>
        {/* Organic */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="border-[4px] border-red-600 dark:border-red-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 dark:hover:border-gray-800 dark:hover:bg-gray-800 cursor-pointer"
        >
          <img
            src={icon2}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-black dark:text-white text-2xl font-lg text-center uppercase">
            oraganic
          </h1>
        </div>
        {/* Pizza */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="border-[4px] border-red-600 dark:border-red-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 dark:hover:border-gray-800 dark:hover:bg-gray-800 cursor-pointer"
        >
          <img
            src={icon3}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-black dark:text-white text-2xl font-lg text-center uppercase">
            pizza
          </h1>
        </div>
        {/* Pasta */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="border-[4px] border-red-600 dark:border-red-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 dark:hover:border-gray-800 dark:hover:bg-gray-800 cursor-pointer"
        >
          <img
            src={icon4}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />

          <h1 className="text-black dark:text-white text-2xl font-lg text-center uppercase">
            pasta
          </h1>
        </div>
      </section>

      {/* Welcome */}
      <section
        className={`${
          darkMode ? "dark bg-black" : "light bg-light"
        } w-full lg:px-20 px-10 lg:py-20 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
      >
        <div>
          <img
            src={about1}
            alt=""
            data-aos="fade-up"
            className="lg:w-[800px] lg:h-[600px] rounded-xl 2xl:h-[800px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1
            data-aos="zoom-in"
            className="text-2xl text-black dark:text-white font-semibold text-center uppercase"
          >
            Welcome to
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-6xl text-black dark:text-white font-bold text-center"
          >
            Pizza Fly
          </h1>
          <p
            data-aos="zoom-in"
            className="text-xl text-slate-800 dark:text-slate-100 text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            recusandae natus vero assumenda adipisci inventore est dolorem
            earum. Temporibus praesentium dolores vero repellendus assumenda
            officiis similique eos esse, dolore ab.
          </p>
          <p
            data-aos="zoom-in"
            className="text-xl text-slate-800 dark:text-slate-100 text-center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem animi quaerat dolor magni tempore iusto laudantium
            adipisci vel. Molestias, dolorem.
          </p>
          <p
            data-aos="zoom-in"
            className="text-xl text-slate-800 dark:text-slate-100 text-center"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem animi quaerat dolor magni tempore iusto laudantium
            adipisci vel. Molestias, dolorem.
          </p>
          <button
            data-aos="flip-up"
            className="bg-red-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black uppercase"
          >
            order now
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
