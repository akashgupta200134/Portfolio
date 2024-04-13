import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  

  return (
    <div className="flex flex-col items-end justify-end h-32 w-full">
      <div className="mt-32">
        <div className="relative mr-20">
          <div>
            {menuVisible ? (
              <Link to="/"><RxCross1 className="text-white h-8 w-8" onClick={toggleMenu} /></Link>
              
            ) : (
              <Link to="/menubar" onClick={toggleMenu}>
                <IoMenu className="text-white h-8 w-8" />
              </Link>
            )}
          </div>
          {menuVisible && (
            <div className="menu-bar">
              {/* Menu items go here */}
              {/* You can include links to different pages */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
