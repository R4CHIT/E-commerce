import React, { useState } from "react";
const Category = [
  {
    img: "/noodles.png",
    title: "All",
  },
  {
    img: "",
    title: "Dinner",
  },
  {
    img: "/noodles.png",
    title: "Lunch",
  },
  {
    img: "/noodles.png",
    title: "SnackDessert",
  },
  {
    img: "/noodles.png",
    title: "Beverage",
  },
];
function Categories({ setProductData, maindata }) {  
  const [selected,setSelected]=useState('')
  const setCategories = (title) => {
    if (title == "All") {
      setProductData(maindata);
      setSelected('All')
    } else {
      let temp = maindata.filter((item) => item.mealType[0].toLowerCase() == title.toLowerCase());
      setProductData(temp);
      setSelected(title)
    }
  };
  return (
    <div className="mx-[25px] md:px-10 lg:px-20 border-b-sky-200">
      <div className="flex flex-col justify-start mt-10 gap-10">
        <div className="text-2xl md:text-3xl font-bold">Categories</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Category.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 "
              onClick={() => setCategories(element.title)}
            >
              <img
                src={element?.img}
                className={` h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover p-2 bg-gray-400 hover:bg-white hover:shadow-gray-400 hover:scale-y-105 hover:scale-x-105 transform duration-300 hover:shadow-2xl`}
                alt={element?.title}
              />
              <div className={`${ (selected==element?.title)?'text-red-900 text-2xl ':'text-black text-sm md:text-sm' }  transform duration-300 text-center`}>
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
