import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";

const ProductModal = ({ data, setShowModal, showModal }) => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState(false);
  const handleClickCart = () => {
    setCart((prev) =>
     !prev
    );
  };
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
  const handllehideModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={handllehideModal}
    >
      <div
        className="bg-white dark:bg-[#1e1e1e] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-3xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full md:w-1/2 h-60 md:h-auto">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-3 right-3 text-2xl z-10"
            onClick={() => toggleFavorite(data.id)}
          >
            {favorites.includes(data.id) ? (
              <FaHeart className="text-red-500 drop-shadow-md" />
            ) : (
              <GrFavorite className="text-white drop-shadow-md" />
            )}
          </button>
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 text-center md:text-left">
              {data?.mealType}
            </div>

            <div className="flex justify-between items-start gap-2 mb-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {data?.name}
              </h2>
              <div className="flex gap-[2px] text-yellow-400 text-lg">
                {[...Array(Math.floor(data?.rating) || 0)].map((_, idx) => (
                  <MdOutlineStarPurple500 key={idx} />
                ))}
                {[...Array(5 - (Math.floor(data?.rating) || 0))].map(
                  (_, idx) => (
                    <IoStarOutline key={idx} />
                  )
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-extrabold text-[#fa7516]">
              ${data?.caloriesPerServing}
            </span>
            {cart ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClickCart();
                }}
                className="flex items-center gap-2 bg-blue-500  text-white text-sm px-3 py-1 rounded-md transition duration-200"
              >
                <FaShoppingCart />
                Added to Cart
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClickCart();
                }}
                className="flex items-center gap-2 bg-[#fa7516] text-white text-sm px-3 py-1 rounded-md transition duration-200"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
