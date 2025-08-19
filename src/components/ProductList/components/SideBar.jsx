import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const SideBar = ({ productData, setData }) => {
  const [price, setPrice] = useState(2500);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(false);
  const [brands, setBrands] = useState([]);

  const allBrands = ["Apple", "Samsung", "Nokia", "Xiaomi", "Vivo"];

  const applyFilters = (newPrice = price, newRating = rating, newStock = stock, newBrands = brands) => {
    const filtered = productData.filter(item => {
      const priceMatch = item.price >= newPrice;
      const ratingMatch = item.rating >= newRating;
      const stockMatch = !newStock || item.availableStock > 0;
      const brandMatch = newBrands.length === 0 || newBrands.includes(item.category);
      return priceMatch && ratingMatch && stockMatch && brandMatch;
    });
    setData(filtered);
  };

  return (
    <aside className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 p-4 bg-white shadow-lg overflow-y-auto">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="2500"
          step="50"
          value={price}
          onChange={(e) => {
            const val = Number(e.target.value);
            setPrice(val);
            applyFilters(val, rating, stock, brands);
          }}
          className="w-full accent-blue-500"
        />
        <p className="text-sm mt-1 text-gray-600">Up to ${price}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Ratings</h3>
        <ul className="space-y-1">
          {[5, 4, 3, 2, 1].map(star => (
            <li
              key={star}
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setRating(star);
                applyFilters(price, star, stock, brands);
              }}
            >
              {Array(star).fill().map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              {star !== 5 && <span className="text-sm text-gray-700">& up</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Brand</h3>
        <ul className="space-y-2">
          {allBrands.map(brand => (
            <li key={brand}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={brands.includes(brand)}
                  onChange={() => {
                    let newBrands = [];
                    if (brands.includes(brand)) {
                      newBrands = brands.filter(b => b !== brand);
                    } else {
                      newBrands = [...brands, brand];
                    }
                    setBrands(newBrands);
                    applyFilters(price, rating, stock, newBrands);
                  }}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Availability</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={stock}
            onChange={() => {
              const newStock = !stock;
              setStock(newStock);
              applyFilters(price, rating, newStock, brands);
            }}
          />
          In Stock
        </label>
      </div>
    </aside>
  );
};

export default SideBar;
