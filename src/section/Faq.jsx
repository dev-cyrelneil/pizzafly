import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeContext";
import faqimg1 from "../assets/images/faq1.jpg";
import faqimg2 from "../assets/images/faq2.jpg";
import faqimg3 from "../assets/images/faq3.jpg";
import faqimg4 from "../assets/images/faq4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from "flowbite-react";

const Faq = () => {
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
      id="faq"
      className={`${
        darkMode ? "dark bg-black" : "light bg-light"
      } w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-14`}
    >
      <div
        id="left"
        className="flex flex-col justify-center items-center gap-12"
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl text-black font-bold text-center dark:text-white"
        >
          Frequently Asked Questions
        </h1>

        <div data-aos="slide-up" className="w-full">
          <Accordion className="flex flex-col justify-center items-center gap-2">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg 2xl:text-xl">
                What are your opening hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 2xl:text-xl text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur unde soluta, vero aliquam nulla tenetur delectus
                  natus amet possimus laborum itaque, est iure eum facere
                  repellat magni accusamus. Distinctio, rem.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg 2xl:text-xl">
                What are your opening hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 2xl:text-xl text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur unde soluta, vero aliquam nulla tenetur delectus
                  natus amet possimus laborum itaque, est iure eum facere
                  repellat magni accusamus. Distinctio, rem.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg 2xl:text-xl">
                What are your opening hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 2xl:text-xl text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur unde soluta, vero aliquam nulla tenetur delectus
                  natus amet possimus laborum itaque, est iure eum facere
                  repellat magni accusamus. Distinctio, rem.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg 2xl:text-xl">
                What are your opening hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 2xl:text-xl text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur unde soluta, vero aliquam nulla tenetur delectus
                  natus amet possimus laborum itaque, est iure eum facere
                  repellat magni accusamus. Distinctio, rem.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg 2xl:text-xl">
                What are your opening hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 2xl:text-xl text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur unde soluta, vero aliquam nulla tenetur delectus
                  natus amet possimus laborum itaque, est iure eum facere
                  repellat magni accusamus. Distinctio, rem.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg 2xl:text-xl">
                What are your opening hours?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 2xl:text-xl text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur unde soluta, vero aliquam nulla tenetur delectus
                  natus amet possimus laborum itaque, est iure eum facere
                  repellat magni accusamus. Distinctio, rem.
                </p>
              </Accordion.Content>
            </Accordion.Panel>

          </Accordion>
        </div>
        <button
          data-aos="flip-up"
          className="bg-red-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black uppercase"
        >
          contact us
        </button>
      </div>
      <div
        id="image box"
        className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4"
      >
        <img
          data-aos="zoom-in"
          src={faqimg1}
          alt="faq1"
          className="w-[400px] h-[400px] object-cover 2xl:w-[500px] 2xl:h-[400px] rounded-xl"
        />
        <img
          data-aos="zoom-in"
          src={faqimg2}
          alt="faq2"
          className="w-[400px] h-[400px] object-cover 2xl:w-[500px] 2xl:h-[400px] rounded-xl"
        />
        <img
          data-aos="zoom-in"
          src={faqimg3}
          alt="faq3"
          className="w-[400px] h-[400px] object-cover 2xl:w-[500px] 2xl:h-[400px] rounded-xl"
        />
        <img
          data-aos="zoom-in"
          src={faqimg4}
          alt="faq4"
          className="w-[400px] h-[400px] object-cover 2xl:w-[500px] 2xl:h-[400px] rounded-xl"
        />
      </div>
    </section>
  );
};

export default Faq;
