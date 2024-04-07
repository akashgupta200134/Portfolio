import React from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  return (
    <div className="flex flex-col items-end justify-end  h-32 w-full ">
      <div className=" mt-32">
       <div className="relative mr-20 ">
    
        <motion.div
          whileTap={{ scale: 0.6 }}
          className=" cursor-pointer"
          onClick={() => console.log("Menu clicked")}
        >
        
          <Link to="/menubar">
            <IoMenu  className=" text-white h-8 w-8  "/>
          </Link>
        </motion.div>
      </div> 
      </div>
      
    </div>
  );
};

export default Navbar;
