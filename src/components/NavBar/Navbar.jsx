import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import Searchbar from "./Searchbar";

const Navbar = ({setProductData,maindata}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  let count = 0;
  if (localStorage.getItem("cart") == null) {
    count = 0;
  } else {
    count = JSON.parse(localStorage.getItem("cart")).length;
  }
  // useEffect(() => {
  //   if (localStorage.getItem("cart") == null) {
  //     count = 0;
  //   } else {
  //     count = JSON.parse(localStorage.getItem("cart")).length;
  //   }
  // }, [count]);
  const navigate = useNavigate();
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-xl">
      <nav className="flex justify-between items-center h-20 px-4 md:px-10">
        <div className="text-white  relative" onClick={() => navigate("/")}>
          <img
            src="/logo2.png"
            alt="logo"
            className="md:h-30 h-15 w-15 md:w-30"
          />
        </div>

        {/* <div className="hidden lg:flex items-center gap-10 text-[18px] font-medium">
          <NavLink to={'/'} className="hover:text-amber-500 cursor-pointer">Home</NavLink>
          <NavLink to={'/'} className="hover:text-amber-500 cursor-pointer">About</NavLink>
          <NavLink to={'/'} className="hover:text-amber-500 cursor-pointer">Contact</NavLink>
          <NavLink to={'/'} className="hover:text-amber-500 cursor-pointer">Pricing</NavLink>
        </div> */}

        <div className="flex lg:flex items-center gap-6">
          <Searchbar setProductData={setProductData} maindata={maindata}/>
          <div className="relative" onClick={() => navigate("/cart")}>
            <FiShoppingCart className="text-3xl" />
            <span className="absolute text-white bg-blue-600 h-5 w-5 rounded-2xl text-[12px] flex justify-center items-center bottom-4 left-5">
              {count == null ? 0 : count}
            </span>
          </div>
        </div>

        {/* <div className="flex lg:hidden">
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
        </div> */}
      </nav>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="flex flex-col lg:hidden bg-white shadow-md px-6 py-4 text-[18px] gap-4 font-medium">
         
          <div className="flex items-center bg-gray-100 rounded-2xl text-black h-10 w-full justify-between px-2">
            <input
              type="text"
              className="text-[15px] outline-none bg-transparent w-full px-2"
              placeholder="Search here"
            />
            <IoIosSearch className="text-xl" />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
