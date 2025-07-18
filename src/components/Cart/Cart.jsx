import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Cartcard from "./Cartcard";
import totalAmount from "../CustomFunction/totalAmount";
import OrangeButton from "../Button/OrangeButton";
import CheckoutModal from "./Modal/CheckoutModal";

const Cart = () => {
  
  const data =localStorage.getItem("cart")
  const [item, setItem] = useState(data ? JSON.parse(data) : []);
  const [visible,setVisible] = useState(false)
  
  return (
    <div className="md:px-10 lg:px-20 bg-whiten mt-30  ">
        <Navbar />
        {item.length === 0 ? (
          <div className="flex justify-center items-center h-[60vh] transform duration-600 text-3xl md:text-5xl text-pink-500">No item in Cart</div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {item.map((item, index) => (
              <Cartcard className="grid grid:cols-1 gap-10" setItem={setItem} product={item} key={index} />
            ))}
            <div className="flex justify-between border-t-2 border-black mx-4 md:my-5 md:mx-30">

              <div className="flex justify-between w-[100vw] my-10 mx-5">
                <div>
                <OrangeButton title={"Check Out"} onClick={()=>setVisible((prev)=>!prev)}/>
              </div>
              
              <div className="flex gap-1 md:gap-4 font-bold text-xl md:text-2xl text-orange-500">
                <div>Total Amount -</div>
                <div className="text-gray-700">${totalAmount(item)}</div>
              </div>
              </div>
            </div>
          </div>
        )}
        {
          visible && (
            <CheckoutModal visible={visible} product={item} setVisible={setVisible}/>
          )
        }
      </div>
  );
};

export default Cart;
