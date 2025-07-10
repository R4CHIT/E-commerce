import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import productDataApi from "../Api/productData.api";
import ProductModal from "./Modal/ProductModal";
function Popularitem() {
  const [favorites, setFavorites] = useState([]);
  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    productDataApi(setProduct);
  }, []);

  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const handlleShowModal = (id) => {
    const selectedItem = product.find((item) => item.id === id);
    if (selectedItem) {
      setData(selectedItem);

      setShowModal(!showModal);
    }
  };

  return (
    <>
      {showModal == false ? (
        <div className="mx-20 md:px-10 lg:px-20 bg-whiten mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {product.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl min-h-90 overflow-hidden shadow-md hover:shadow-2xl transition duration-300 relative group"
                onClick={() => handlleShowModal(item.id)}
              >
                <div className="relative">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-full h-52 object-cover"
                  />
                  <button
                    className="absolute top-3 right-3 text-xl"
                    onClick={(e) => {
                      e.stopPropagation(); // 🔒 Stop event bubbling
                      toggleFavorite(index); // ✅ Your actual logic
                    }}
                  >
                    {favorites.includes(index) ? (
                      <FaHeart className="text-red-500 drop-shadow" />
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
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item?.name}
                    </h2>
                    <div className="flex gap-1 text-yellow-400 text-xl">
                      {[...Array(Math.floor(item?.rating) || 0)].map(
                        (_, idx) => (
                          <MdOutlineStarPurple500 key={idx} />
                        )
                      )}
                      {/* Ensure 5 - item?.rating is a valid number before creating the array */}
                      {[...Array(5 - (Math.floor(item?.rating) || 0))].map(
                        (_, idx) => (
                          <IoStarOutline key={idx} />
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-[#fa7516]">
                      ${item?.caloriesPerServing}
                    </span>
                    <button
                    onClick={(e)=>{e.stopPropagation();}}
                     className="flex items-center gap-2 bg-[#fa7516] hover:bg-[#f97216] text-white text-sm px-3 py-1 rounded-md transition duration-200">
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          <ProductModal
            data={data}
            setShowModal={setShowModal}
            showModal={showModal}
          />
        </div>
      )}
    </>
  );
}

export default Popularitem;
