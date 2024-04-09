import React from 'react'
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
 <hr className=" w-full  bg-gray-600 mt-20" />
      <div className="mb-12 flex flex-row mt-6">
        <p className="text-white font-light ml-20">
          © 2024 Akash Gupta . All rights reserved.
        </p>
        <div className="flex gap-3  ">
          <Link to="https://github.com/akashgupta200134">
            <IoLogoGithub className="text-white h-[30px] w-[30px] ml-[650px]" />
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
  )
}

export default Footer