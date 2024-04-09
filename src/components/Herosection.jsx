import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Health from "../images/health.png";
import food from "../images/food.png";
import patho from "../images/weather.png";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import Projects from "../components/Projects";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import About from "../components/About";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxCaretUp } from "react-icons/rx";

const Herosection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
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
            <a href="https://arogyasahayak.vercel.app/">
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
            <a href="https://aahar.vercel.app/">
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
                Experience real-time weather updates with our dynamic website
                crafted using HTML, Tailwind CSS, and JavaScript. Seamlessly
                integrating live weather data, it provides users with accurate
                forecasts and insightful weather insights, ensuring they stay
                informed and prepared for any conditions.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="  mb-4 flex flex-col items-center justify-center">
        <p className=" text-gray-500 text-center text-xl font-semibold ml-80  mr-80">
          Skilled frontend developer excelling in creating captivating user
          interfaces with expertise in React, JavaScript, and CSS."
        </p>

        <Link to="Projects">
          <button className=" text-white border h-12 w-32 rounded-3xl  mt-10">
            See All Works
          </button>
        </Link>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <p>Skills Cover</p>
        <p className=" text-white text-7xl font-black text-center">
          WEB DESIGN
        </p>

        <p className=" text-white text-7xl font-black text-center">
          UX/UI DESIGN
        </p>
        <p className=" text-white text-7xl font-black text-center">
          SEO OPTIMIZATION
        </p>

        <Link to="About">
        
        <button className=" border h-12 w-28 rounded-3xl  mt-10 text-white">
          Technologies
        </button>
        </Link>

      </div>

      <div className=" flex flex-row  gap-32 mt-24 mb-6 items-center justify-center">
        <div className=" flex flex-col items-center">
          <MdAlternateEmail className=" text-white h-8 w-8 " />
          <Link to="https://www.google.com/gmail/about/">
            <p className=" text-white font-semibold text-xl">
              akashgupta2000515@gmail.com
            </p>
          </Link>

          <p className=" text-gray-500  text-lg font-medium">Email</p>
        </div>

        <div className=" flex flex-col items-center">
          <FaLocationDot className=" text-white  h-8 w-8" />

          <p className=" text-white font-semibold text-xl">
            {" "}
 Gandhi Nagar,Thane,Maharashtra,India
          </p>

          <p className=" text-gray-500  text-lg font-medium">Address</p>
        </div>

        <div className=" flex flex-col items-center">
          <IoCall className=" text-white h-8 w-8" />
          <p className=" text-white font-semibold text-xl">(+91) 9867433352</p>

          <p className=" text-gray-500  text-lg font-medium">Phone</p>
        </div>
      </div>

      <div className=" mt-20">
        <p className=" text-gray-600 text-lg font-medium text-center">
          Explore  About for More Information
        </p>
        <Link to="About">
          <p className=" font-black text-7xl text-white text-center mt-4 mb-12">
            ABOUT ME
          </p>
        </Link>



      </div>
      <div className="mb-12 flex  mt-32"> 
     
 
 
      <p className="text-white ml-20" onClick={scrollToTop}>
        Back Top
      </p>
      <RxCaretUp className="text-white h-10 w-10 -mt-1 ml-4" onClick={scrollToTop} />
     
        <p className="text-white font-light text-center ml-[310px]">
          © 2024 Akash Gupta . All rights reserved.
        </p>
      
        <div className="flex gap-4  ">
          <Link to="https://github.com/akashgupta200134">
            <IoLogoGithub className="text-white h-[30px] w-[30px] ml-[300px]" />
          </Link>

          <Link to="https://www.linkedin.com/in/akash-gupta-0126bb270/">
            <FaLinkedin className="text-white h-[30px] w-[30px]" />
          </Link>

          <Link to="https://www.instagram.com/_mr_akash_gupta_/">
            <FaInstagram className="text-white h-[30px] w-[30px]" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Herosection;
