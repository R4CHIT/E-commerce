import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import removeFromCart from "../localstorage/removeFromCart";
import Quantity from "./Quantity";

const Cartcard = ({ product, setItem, selected, setSelected,checked,setChecked }) => {
  const [fav, setFav] = useState(false);
  const [item, setItemState] = useState(product);
  

  useEffect(() => {
    setItemState(product);
  }, [product]);

  const toggleFavorite = () => setFav(prev => !prev);

  const handleCheckbox = () => {
  setChecked(prev => !prev);
  if (!checked) {
    
    setSelected(prev => [...(prev || []), item]);
  } else {
    
    setSelected(prev => (prev || []).filter(i => i.id !== item.id));
  }
};


  return (
    <div className="w-full flex justify-center my-2">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl w-[90vw] sm:w-[70vw] flex items-center overflow-hidden border border-gray-200">

        <div className="p-4">
          <input 
            type="checkbox" 
            className="w-5 h-5 cursor-pointer" 
            checked={checked} 
            onChange={handleCheckbox} 
          />
        </div>

        
        <div className="flex justify-center items-center p-4">
          <img
            src={item?.image}
            alt={item?.productName}
            className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-xl"
          />
        </div>

        
        <div className="flex-1 p-4 flex flex-col justify-between gap-2">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
              {item?.productName}
            </h2>
            <p className="text-sm text-gray-500">{item?.category}</p>
            <p className="text-sm text-green-600">
              {item?.availableStock === 0
                ? "Out Of Stock"
                : `Available Stock: ${item?.availableStock || 0}`}
            </p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <span className="text-lg sm:text-xl font-bold text-[#f57125]">
              ${item?.price}
            </span>

            <div className="flex gap-3 text-lg sm:text-xl text-gray-700">
              {fav ? (
                <FaHeart
                  onClick={toggleFavorite}
                  className="text-red-400 cursor-pointer"
                />
              ) : (
                <GrFavorite
                  onClick={toggleFavorite}
                  className="text-black cursor-pointer"
                />
              )}
              <MdDeleteForever
                onClick={() => removeFromCart(item, setItem)}
                className="cursor-pointer hover:text-red-500 transition"
              />
            </div>
          </div>

          <Quantity data={item} quantity={item?.quantity} setItem={setItem} />
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
