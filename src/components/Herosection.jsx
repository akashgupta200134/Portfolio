import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Health from "../images/health.png";
import food from "../images/food.png";
import patho from "../images/weather.png";

const Herosection = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPos = window.scrollY;
  //     const boxes = document.querySelectorAll(".box");

  //     boxes.forEach((box, index) => {
  //       box.style.top = `${scrollPos * -(index + 1)}px`;
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <div className="mt-32">
        <section>
          <div className="text-center text-7xl font-extrabold text-white">
            <Typewriter
              options={{
                strings: [
                  " Hey! I am Akash Gupta",
                  "Empowering the Web with Passion and Precision",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="mt-10 text-xl font-semibold text-center ml-48 mr-48 text-white">
            "Frontend excellence, where design meets code. Transforming ideas
            into seamless experiences. Let's create something extraordinary
            together!"
          </p>

          <div className=" flex flex-col items-center justify-center  mt-24">
            <iframe
              src="https://lottie.host/embed/7c37fc41-a0a5-4014-ae47-8166b734f84f/MddDyvNJrz.json"
              className="  h-16 w-16 "
            ></iframe>
            <p className=" text-white"> Scroll Down to Explore</p>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 gap-2 mt-12 mb-12">
          <div className="box border rounded-xl h-96 w-auto ml-16 mr-16 mt-12 ">
            <a href="https://aoh-four-musketeers.vercel.app/">
              <img src={Health} className=" h-96 w-auto rounded-xl" />
              <p className="  text-white  -mt-[330px] text-center text-5xl font-bold  ml-[645px]  ">
                Arogya Sahayak
              </p>

              <p className="  text-white text-start mt-[30px] ml-[710px] mr-12  ">
                {" "}
                Crafted with ReactJS, Tailwind CSS, Firebse and Node.js, our
                healthcare website delivers a seamless and responsive user
                experience. Backed by Firebase, it ensures secure data
                management and real-time updates, empowering users with
                efficient healthcare access.{" "}
              </p>
            </a>
          </div>

          <div className="box border rounded-xl h-96 w-auto ml-16 mr-16 mt-12">
            <a href="https://food-app-ashy-ten.vercel.app/">
              <img src={food} className=" h-96 w-auto rounded-xl" />

              <p className=" text-white  -mt-[330px] text-center text-5xl font-bold  ml-[435px] ">
                Aahar
              </p>
              <p className=" text-white text-start mt-[30px] ml-[720px] mr-12">
                Built with ReactJS, Tailwind CSS, and Node.js, our food delivery
                website offers a seamless and responsive user interface.
                Leveraging Firebase, it ensures secure transactions and
                real-time order tracking, providing users with a convenient and
                efficient food delivery experience.
              </p>
            </a>
          </div>

          <div className="box border rounded-xl h-96 w-auto ml-16 mr-16 mt-12">
            <a href="https://weather-app-mu-wheat.vercel.app/">

      <img src={patho} className=" h-96 w-auto rounded-xl" />
            <p className="  text-white -mt-80 text-center text-5xl font-bold  ml-[585px] ">
              Weather App
            </p>

            <p className=" text-white text-start mt-[30px] ml-[720px] mr-12 ">
            Experience real-time weather updates with our dynamic website crafted using HTML, Tailwind CSS, and JavaScript. Seamlessly integrating live weather data, it provides users with accurate forecasts and insightful weather insights, ensuring they stay informed and prepared for any conditions.
            </p>


            </a>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
