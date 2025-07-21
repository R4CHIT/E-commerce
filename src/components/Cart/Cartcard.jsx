import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import removeFromCart from "../localstorage/removeFromCart";
import Quantity from "./Quantity";
import OrangeButton from "../Button/OrangeButton";

const Cartcard = ({ product, setItem }) => {
  const [favbool, setfavbool] = useState(false);
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(product);
  }, [product]);

  const toggleFavorite = () => {
    if (favbool == true) {
      setfavbool(false);
    } else {
      setfavbool(true);
    }
  };
  
  const [quantity, setquantity] = useState(items?.quantity);
  
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl w-[90vw] sm:w-[70vw] flex flex-col sm:flex-row overflow-hidden min-h-[150px] sm:max-h-[150px] border border-gray-200">
        <div className="w-full sm:w-1/3 flex justify-center items-center p-4">
          <img
            src={items?.image}
            alt={items?.name}
            className="w-32 h-32 sm:w-44 sm:h-44 object-cover rounded-xl"
          />
        </div>

        <div className="p-5 flex flex-col justify-between w-full sm:w-2/3 gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate">{items?.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{items?.mealType}</p>
            </div>

            <div className="flex items-center sm:items-end flex-col gap-2 sm:gap-1 flex-shrink-0">
              <span className="text-lg sm:text-xl font-bold text-[#f57125]">
                ${items?.caloriesPerServing}
              </span>
              <div className="flex gap-3 text-lg sm:text-xl text-gray-700">
                {favbool ? (
                  <FaHeart
                    onClick={() => {
                      toggleFavorite();
                    }}
                    className="text-red-400 drop-shadow cursor-pointer"
                  />
                ) : (
                  <GrFavorite
                    onClick={() => {
                      toggleFavorite();
                    }}
                    className="text-black drop-shadow cursor-pointer"
                  />
                )}
                <MdDeleteForever
                  onClick={() => removeFromCart(items, setItem)}
                  className="cursor-pointer hover:text-red-500 transition"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Quantity data={items} quantity={items?.quantity} setItem={setItem}/> 
            <OrangeButton title={'Order now'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;