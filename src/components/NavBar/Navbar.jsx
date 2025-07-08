import React, { useState,useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-xl">
      <nav className="flex justify-between items-center h-20 px-4 md:px-10">
        <div className="text-white  relative">
          <img src="/logo2.png" alt="logo" className="h-25 w-25" />
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[18px] font-medium">
          <div className="hover:text-amber-500 cursor-pointer">Home</div>
          <div className="hover:text-amber-500 cursor-pointer">About</div>
          <div className="hover:text-amber-500 cursor-pointer">Contact</div>
          <div className="hover:text-amber-500 cursor-pointer">Pricing</div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center bg-gray-100 rounded-2xl text-black h-10 w-60 justify-between px-2">
            <input
              type="text"
              className="text-[15px] outline-none bg-transparent w-full px-2"
              placeholder="Search here"
            />
            <IoIosSearch className="text-xl" />
          </div>
         <div className="relative">
           <FiShoppingCart className="text-2xl" /><span className="absolute text-white bg-blue-600 h-4 w-4 rounded-2xl text-[10px] flex justify-center items-center bottom-3 left-4">0</span>
         </div>
        </div>

        <div className="flex lg:hidden">
          {menuOpen ? (
            <IoCloseSharp
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <CiMenuBurger
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col lg:hidden bg-white shadow-md px-6 py-4 text-[18px] gap-4 font-medium">
          <div className="hover:text-amber-500 cursor-pointer">Home</div>
          <div className="hover:text-amber-500 cursor-pointer">About us</div>
          <div className="hover:text-amber-500 cursor-pointer">Contact</div>
          <div className="hover:text-amber-500 cursor-pointer">Pricing</div>
          <div className="flex items-center bg-gray-100 rounded-2xl text-black h-10 w-full justify-between px-2">
            <input
              type="text"
              className="text-[15px] outline-none bg-transparent w-full px-2"
              placeholder="Search here"
            />
            <IoIosSearch className="text-xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
