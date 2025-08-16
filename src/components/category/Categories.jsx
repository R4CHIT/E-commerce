import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { FaApple, FaAndroid } from "react-icons/fa";
import { SiSamsung, SiXiaomi, SiVivo, SiNokia } from "react-icons/si";
import { GiSmartphone } from "react-icons/gi";

function Categories({ setProductData }) {
  const Category = [
    { icon: <GiSmartphone />, title: "All" },
    { icon: <SiSamsung />, title: "Samsung" },
    { icon: <FaApple />, title: "Apple" },
    { icon: <SiXiaomi />, title: "Xiaomi" },
    { icon: <SiNokia />, title: "Nokia" },
    { icon: <SiVivo />, title: "Vivo" },
  ];

  const maindata = useOutletContext();
  const [selected, setSelected] = useState("All");

  const setCategories = (title) => {
    setSelected(title);
    if (title === "All") {
      setProductData(maindata);
    } else {
      const filtered = maindata.filter(
        (item) => item.category.toLowerCase() === title.toLowerCase()
      );
      setProductData(filtered);
    }
  };

  return (
    <div className="md:px-20 px-4 py-10 border-b border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Brands</h2>

      {/* Responsive category grid */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {Category.map((element, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer w-20 sm:w-24"
            onClick={() => setCategories(element.title)}
          >
            <div
              className={`text-3xl sm:text-4xl p-4 rounded-full transition-transform duration-300
              ${
                selected === element.title
                  ? "bg-blue-100 text-blue-600 shadow-xl scale-110"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-blue-500 hover:scale-105"
              }`}
            >
              {element.icon}
            </div>
            <span
              className={`mt-2 text-center font-medium text-sm sm:text-base transition-colors duration-300
                ${selected === element.title ? "text-blue-600" : "text-black"}`}
            >
              {element.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
