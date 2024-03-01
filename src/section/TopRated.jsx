import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDarkMode } from "../DarkModeContext";
import { pizza } from "../components/export";

import AOS from "aos";
import "aos/dist/aos.css";

const TopRated = () => {
  // AOS Animation
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  // Slick - Carousel React

  var top_product = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
        },
      },
    ],
  };

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      id="pizza"
      className={`${
        darkMode ? "dark bg-black" : "light bg-light"
      } w-full lg:px-20 px-3 lg:py-20 py-10 h-fit flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="text-6xl text-black dark:text-white font-bold text-center"
      >
        Top Rated
      </h1>
      <p
        data-aos="zoom-in"
        className="text-xl text-black dark:text-slate-100 text-center px-10 2xl:px-80"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic
        porro tenetur quasi harum eius reiciendis suscipit ullam saepe, officiis
        facere, vero quibusdam id error minus quo optio mollitia veniam. lorem
      </p>

      <div data-aos="slide-up" className="lg:w-[90%] w-full">
        <Slider {...top_product}>
          {pizza.map((item, index) => (
            <div
              key={index}
              id="product-box"
              className="bg-black dark:bg-gray-800 p-8 flex flex-col justify-center items-center gap-4 rounded-lg"
            >
              <img
                src={item.image}
                alt="product img"
                className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <h1 className="text-white text-center text-2xl 2xl:text-3xl font-bold dark:text-white">
                {item.title}
              </h1>
              <p className="text-lg 2xl:text-xl text-white text-center">{item.price}</p>

              <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black uppercase">
                order now
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopRated;
