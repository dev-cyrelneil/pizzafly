import React, { useEffect } from "react";
import banner4 from "../assets/images/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full lg:px-20 px-10 lg:py-20 h-[100vh] bg-cover bg-center flex flex-col justify-center items-start gap-8"
      style={{ backgroundImage: `url(${banner4})` }}
    >
      <h1 data-aos="zoom-in" className="text-6xl 2xl:text-8xl 2xl:pb-3 text-white font-bold">
        Life is a combination <br></br> of Pizza & Magic
      </h1>

      <p data-aos="zoom-in" className="text-xl 2xl:text-2xl text-white font-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio non debitis eaque iusto porro magnam.<br></br> Magni, facere. Est, minus. The Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Aut similique accusantium nulla unde, adipisci blanditiis! Maiores laudantium,<br></br> harum odio dignissimos sunt architecto esse. Reiciendis aliquam quaerat<br></br> a quo officiis aspernatur?
      </p>

      <button
        data-aos="flip-up"
        className="bg-red-500 text-lg text-white px-8 py-4 rounded-full font-semibold uppercase hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black"
      >
        order now
      </button>
    </section>
  );
};

export default Hero;
