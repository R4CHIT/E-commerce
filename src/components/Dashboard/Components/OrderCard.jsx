import React from "react";
import { LuDot } from "react-icons/lu";

const OrderCard = ({ data }) => {
  return (
    <div className="border rounded-md bg-sky-100 p-4 w-60 max-h-[280px] text-gray-700 text-xs font-medium shadow-sm flex flex-col">
      <div className="flex flex-col items-center gap-3">
        <div className="text-sm font-semibold italic text-gray-900">
          Customer Details
        </div>
        <div className="flex justify-between gap-7 w-full font-medium text-xs">
          <p>{data.cName}</p>
          <p>{data.contactNumber}</p>
        </div>
        <div className="flex justify-between w-full text-xs">
          <p>{data.city}</p>
          <p>{data.street}</p>
        </div>
        <div className="w-full mt-1 text-xs">
          <p className="font-semibold">Delivery Details:</p>
          <p>{data.deliveryDescription}</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 gap-3 w-full flex-1 overflow-hidden">
        <div className="text-sm font-semibold italic text-gray-900">Items</div>
        <div className="flex justify-between w-full font-semibold text-xs">
          <p>Total Amount =</p>
          <p>{data.totalAmount}</p>
        </div>
        <div className="w-full space-y-1 overflow-y-auto max-h-36 pr-2">
          <div
              className="flex justify-between items-center text-xs"
            >
              
              <div className="flex gap-2 items-center text-gray-800">
                <p>Name</p>
              </div>
              <div>Quantity</div>
            </div>
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-xs"
            >
              
              <div className="flex gap-2 items-center text-gray-800">
                <p>{item.itemName}</p>
              </div>
              <div>{item.quantity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
