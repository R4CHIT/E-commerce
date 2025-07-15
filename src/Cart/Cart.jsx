import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import Cartcard from "./Cartcard";

const Cart = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(JSON.parse(localStorage.getItem("cart")));
  }, []);
  // console.log(item)
  return (
    <div className="md:px-10 lg:px-20 bg-whiten mt-30 ">
        <Navbar />
        {item == null ? (
          <div className="flex justify-center items-center h-[60vh] transform duration-600 text-3xl md:text-5xl text-pink-500">No item in Cart</div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {item.map((item, index) => (
              <Cartcard className="grid grid:cols-1 gap-10" item={item} key={index} />
            ))}
          </div>
        )}
      </div>
  );
};

export default Cart;
