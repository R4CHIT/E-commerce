import React, { useState } from "react";
function Categories() {
  const Category = [
    {
      img: "/noodles.png",
      title: "Pasta",
    },
    {
      img: "https://gandakiuniversity.netlify.app/Icons/pizza.png",
      title: "Samosa",
    },
    {
      img: "/noodles.png",
      title: "Rice",
    },
    {
      img: "/noodles.png",
      title: "Meat",
    },
    {
      img: "/noodles.png",
      title: "Roti",
    },
  ];
  return (
    <div className="mx-[25px] md:px-10 lg:px-20 border-b-sky-200">
      <div className="flex flex-col justify-start mt-10 gap-10">
        <div className="text-2xl md:text-3xl font-bold">Categories</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Category.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 "
            >
              <img
                src={element?.img}
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover p-2 bg-gray-400 hover:bg-white hover:shadow-gray-400 hover:scale-y-105 hover:scale-x-105 transform duration-300 hover:shadow-2xl"
                alt={element?.title}
              />
              <div className="text-sm sm:text-base text-center">
                {element?.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
