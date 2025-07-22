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
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-xl flex flex-col gap-2 p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl sm:text-2xl font-semibold text-orange-500">Check Out</div>

        
        <div className="flex justify-between text-sm sm:text-base font-bold">
          <div className="min-w-52">Item</div>
          <div >Quantity</div>
          <div>Price</div>
        </div>

       
        {product.map((item, index) => (
          <div className="flex justify-between rounded-md text-sm sm:text-base bg-gray-200 p-2" key={index}>
            <div className="min-w-50">{item?.name}</div>
            <div className="text-center">x{item?.quantity}</div>
            <div className="text-end">{item?.caloriesPerServing}</div>
          </div>
        ))}

        
        <div className="flex justify-between items-center text-lg sm:text-xl font-semibold pt-2 border-t-2 border-gray-300 mt-2">
          <div>Total:</div>
          <div>{totalAmount(product)}</div>
        </div>

        
        <UserDetail />
      </div>
    </div>
  );
};

export default CheckoutModal;
