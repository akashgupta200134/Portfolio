import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Menubar = () => {
  return (
    <div className=" mt-14">
      <div className="  ">
        <ul className="flex flex-col  gap-6 text-center text-white">
          <li onClick={() => {}} className=" text-7xl font-black">
            <Link to="/">Portfolio</Link>
          </li>

          <li onClick={() => {}} className=" text-7xl font-black">
            <Link to="/projects">Projects</Link>
          </li>

          <li onClick={() => {}} className=" text-7xl font-black">
            <Link to="/about">About</Link>
          </li>

          <li onClick={() => {}} className=" text-7xl font-black">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;
