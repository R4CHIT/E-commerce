import React, { useState } from "react";
import { FaStar, FaTimes, FaFilter } from "react-icons/fa";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [price, setPrice] = useState(500);

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg p-6 z-30 transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:shadow-none
        `}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <FaFilter /> Filters
        </h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <ul className="space-y-2 text-gray-700">
            {["Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
              <li key={cat}>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500" />
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="2000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full accent-orange-500"
          />
          <p className="text-sm mt-1 text-gray-600">Up to ${price}</p>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Ratings</h3>
          <ul className="space-y-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <li key={star} className="flex items-center gap-1 cursor-pointer">
                {Array(star)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                <span className="text-sm text-gray-700">& up</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Brand</h3>
          <ul className="space-y-2 text-gray-700">
            {["Nike", "Apple", "Samsung", "Adidas"].map((brand) => (
              <li key={brand}>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500" />
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Availability</h3>
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="accent-orange-500" />
            In Stock
          </label>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          Apply Filters
        </button>
      </aside>
    </>
  );
};

export default SideBar;
