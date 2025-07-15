import React, { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import removeFromCart from "../components/localstorage/removeFromCart";
const Cartcard = (product) => {
  const [favbool, setfavbool] = useState(false);
  const [quantity, setquantity] = useState(1);
  const item = product?.item; 
  // console.log(product);
  const toggleFavorite = () => {
    if (favbool == true) {
      setfavbool(false);
    } else {
      setfavbool(true);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl  w-[90vw] sm:w-[70vw] flex flex-row overflow-hidden border border-gray-200">
        <div className="sm:w-1/3 w-full flex justify-center items-center p-4">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full sm:w-44 h-44 object-cover rounded-xl"
          />
        </div>

        <div className="p-5 flex flex-col justify-between sm:w-2/3 w-full gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{item?.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{item?.mealType}</p>
            </div>

            <div className="flex items-center sm:items-end flex-col gap-2 sm:gap-1">
              <span className="text-xl font-bold text-[#f57125]">
                ${item?.caloriesPerServing}
              </span>
              <div className="flex gap-3 text-xl text-gray-700">
                {favbool ? (
                  <FaHeart
                    onClick={() => {
                      toggleFavorite();
                    }}
                    className="text-red-400 drop-shadow"
                  />
                ) : (
                  <GrFavorite
                    onClick={() => {
                      toggleFavorite();
                    }}
                    className="text-black drop-shadow"
                  />
                )}
                <MdDeleteForever onClick={()=>removeFromCart(item)} className="cursor-pointer hover:text-red-500 transition" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                className="w-10 h-10 bg-gray-200 text-gray-800 rounded-md text-xl flex items-center justify-center hover:bg-gray-300 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  if (quantity == 1) {
                    setquantity(1);
                  } else {
                    setquantity((prev) => prev - 1);
                  }
                }}
              >
                -
              </button>

              <div
               
                className="w-14 text-center border border-gray-300 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-orange-400"
              >{quantity}
                </div>

              <button
                className="w-10 h-10 bg-gray-200 text-gray-800 rounded-md text-xl flex items-center justify-center hover:bg-gray-300 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setquantity((prev) => prev + 1);
                }}
              >
                +
              </button>
            </div>

            <button className="bg-[#f57125] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#e35e16] transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
