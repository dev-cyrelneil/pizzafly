import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import { pizza } from "../components/export";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSeller = () => {
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
      className={`${
        darkMode ? "dark bg-black" : "light bg-light"
      } w-full bg-black lg:px-20 lg:py-20 py-10 h-fit flex flex-col justify-center items-center gap-14`}
    >
      <h1
        data-aos="zoom-in"
        className="text-white text-6xl font-bold text-center"
      >
        Our Best Sellers
      </h1>
      <div
        data-aos="slide-up"
        className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6"
      >
        {pizza.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 flex flex-col justify-center items-center gap-4 rounded-lg"
          >
            <img
              src={item.image}
              alt="pizza img"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            />

            <h1 className="text-black text-center text-2xl 2xl:text-3xl font-bold dark:text-white">
              {item.title}
            </h1>
            <h1 className="text-red-600 font-bold text-3x 2xl:text-3xl">{item.price}</h1>
            <p className="text-lg 2xl:text-xl text-slate-800 dark:text-white text-center">
              {item.para}
            </p>

            <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black uppercase">
              order now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
