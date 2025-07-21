import React from "react";
import UserDetail from "../UserDetail";
import totalAmount from "../../CustomFunction/totalAmount";

const CheckoutModal = ({ visible, setVisible, product }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-center justify-center px-2 sm:px-4"
      onClick={() => setVisible((prev) => !prev)}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-xl flex flex-col gap-6 p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl sm:text-2xl font-semibold text-[#111827]">Check Out</div>

        
        <div className="grid grid-cols-3 text-sm sm:text-base font-bold">
          <div>Item</div>
          <div className="text-center">Quantity</div>
          <div className="text-end">Price</div>
        </div>

       
        {product.map((item, index) => (
          <div className="grid grid-cols-3 text-sm sm:text-base" key={index}>
            <div>{item?.name}</div>
            <div className="text-center">{item?.quantity}</div>
            <div className="text-end">{item?.caloriesPerServing}</div>
          </div>
        ))}

        
        <div className="flex justify-between items-center text-lg sm:text-xl font-semibold pt-2">
          <div>Total:</div>
          <div>{totalAmount(product)}</div>
        </div>

        
        <UserDetail />
      </div>
    </div>
  );
};

export default CheckoutModal;
