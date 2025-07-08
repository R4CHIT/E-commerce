import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import Categories from "../category/Categories";
import Popularitem from "../Product.jsx/Popularitem";

function Homepage() {
  const data = [
    {
      id: 1,
      name: " Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Italian",
      price: 300,
      tags: ["Pizza", "Italian"],
      userId: 166,
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating:2,
      reviewCount: 98,
      mealType: ["Dinner"],
    },
  ];
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
      data={data}
       />
    </>
  );
}

export default Homepage;