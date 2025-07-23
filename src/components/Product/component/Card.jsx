import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import ProductModal from "../Modal/ProductModal";
import addToCart from "../../localstorage/addToCart";

const Card = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [cartbool, setCartbool] = useState(false);
  const [favbool, setfavbool] = useState(false);
  
  const handleClickCart = () => {
    if (cartbool == true) {
      setCartbool(false);
      
    } else {
      setCartbool(true)
      addToCart(item);
    }
  };
  const toggleFavorite = () => {
    if (favbool == true) {
      setfavbool(false);
    } else {
      setfavbool(true);
    }
  };
  return (
    <>
      <div
        className="bg-white rounded-2xl min-w-[80vw] md:min-w-[20vw] min-h-90 overflow-hidden shadow-md hover:shadow-2xl transition duration-300 relative group"
        onClick={() => setShowModal(true)}
        
      >
        <div className="relative">
          <img
            src={item?.image}
            alt={item?.name}
            className="w-full h-70 object-cover rounded-md"
          />
          <button
            className="absolute top-3 right-3 text-xl"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite();
            }}
          >
            {favbool ? (
              <FaHeart className="text-red-400 drop-shadow" />
            ) : (
              <GrFavorite className="text-white drop-shadow" />
            )}
          </button>
        </div>

        <div className="p-4 ">
          <div className="text-center text-gray-500 text-sm mb-1">
            {item?.mealType}
          </div>
          <div className="flex justify-between items-center mb-2  min-h-20">
            <h2 className="text-xl font-semibold text-gray-800">
              {item?.name}
            </h2>
            <div className="flex gap-1 text-yellow-400 text-2xl">
              {[...Array(Math.floor(item?.rating) || 0)].map((_, idx) => (
                <MdOutlineStarPurple500 key={idx} />
              ))}

              {[...Array(5 - (Math.floor(item?.rating) || 0))].map((_, idx) => (
                <IoStarOutline key={idx} />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-[#fa7516]">
              ${item?.caloriesPerServing}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClickCart(item);
              }}
              className={`flex items-center gap-2 ${
                cartbool ? "bg-blue-500" : "bg-[#fa7516]"
              } text-white text-[15px] px-3 py-2 rounded-md transition duration-200`}
            >
              <FaShoppingCart />
              {cartbool ? "Added to Cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ProductModal
          data={item}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </>
  );
};

export default Card;
