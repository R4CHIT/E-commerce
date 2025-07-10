import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import Categories from "../category/Categories";
import Popularitem from "../Product/Popularitem";

function Homepage() {
  
  return (
    <>
      <div className="relative flex flex-col justify-center md:mt-0 mt-0 lg:mt-25 mx-0 md:mx-0 lg:mx-[100px] h-[88vh] md:rounded-[0px] rounded-[0px] lg:rounded-lg overflow-hidden">
        <div className="flex fadein transform duration-300 flex-col justify-center h-full md:rounded-[0px] rounded-[0px] lg:rounded-lg bg-center bg-[url('/herobg2.jpeg')] bg-cover">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative px-6 md:px-20 text-white font-mono z-10">
            <div className="text-4xl md:text-6xl lg:text-7xl">Enjoy Your</div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold">Delicious</div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">food</div>
          </div>
          <div className="relative px-6 md:px-20 mt-6 z-10">
            <button className="bg-orange-400 text-white px-6 py-2 md:px-8 md:py-3 rounded-full flex items-center gap-2 text-lg md:text-xl hover:scale-105 transition-transform duration-300">
              <span>Order Now</span>
              <CiDeliveryTruck className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <Categories />
      <Popularitem 
     
       />
    </>
  );
}

export default Homepage;