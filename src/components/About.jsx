import React from "react";
import { FaHtml5 } from "react-icons/fa";
import html from "../images/html.svg";
import css from "../images/css.svg";
import boot from "../images/boot.svg";
import tail from "../images/tail.svg";
import javascript from "../images/javascript.svg";
import cpp from "../images/cpp.svg";
import python from "../images/python.svg";
import sql from "../images/mysql.svg";
import figma from "../images/figma.svg";
import react from "../images/react.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";
import { Link } from "react-router-dom";
import Contact from "../components/Contact"
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div>
        <p className=" text-white font-extrabold text-5xl text-center ">
          {" "}
          Hello, I'm Akash Gupta 👋
        </p>
        <p className=" text-gray-400 font-semibold text-xl text-center mt-6 ml-24 mr-24">
          {" "}
          Software Engineer based in Thane India, specializing in Pre-final Year
          Computer Engineering technical education through hands-on learning and
          building applications.
        </p>
      </div>

      <div className=" mt-20  ">
        <p className=" text-4xl font-bold text-center  text-white ">
          My Skills
        </p>
      </div>

      <div className=" grid grid-cols-4 gap-6 justify-center items-center ml-44 mt-20 mb-8">
        <img
          src={html}
          className=" h-24 w-24 border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={css}
          className=" h-24 w-24 border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={boot}
          className=" h-24 w-24 border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={tail}
          className="h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={javascript}
          className="h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={react}
          className=" h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={cpp}
          className=" h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={python}
          className=" h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={sql}
          className="h-24 w-24 border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={github}
          className=" h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={git}
          className=" h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
        <img
          src={figma}
          className=" h-24 w-24border  bg-white rounded-full px-2 py-2"
        ></img>
      </div>

      <hr className=" w-full text-gray-300 mt-20 "></hr>

<div className=" mt-12 mb-14 flex flex-row  "> 
<p className=" text-white text-3xl font-bold ml-20 "> Have a project in mind?
Let’s build something together!</p>

<Link to="/Contact">
  <button className=" bg-white  h-10 w-24 rounded-lg font-semibold  ml-40"> 
    Contact 
  </button>
</Link>


</div>
<Footer></Footer>


    </div>
  );
};

export default About;
