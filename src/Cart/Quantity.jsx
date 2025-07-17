import React from 'react'
import { useState } from 'react';
import removeQuantity from '../components/localstorage/removeQuantity';
import addQuantiy from '../components/localstorage/addQuantiy';
const Quantity = ({quantity,data,setItem}) => {
   
  return (
    <div>
      <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-gray-200 text-gray-800 rounded-md text-xl flex items-center justify-center hover:bg-gray-300 transition"
                onClick={(e) => {
                  e.stopPropagation();
                    removeQuantity(data,setItem);
                }}
              >
                -
              </div>

              <div className="w-14 text-center border border-gray-300 rounded-md px-2 py-1 outline-none focus:ring-2 focus:ring-orange-400">
                {quantity}
              </div>

              <div
                className="w-10 h-10 bg-gray-200 text-gray-800 rounded-md text-xl flex items-center justify-center hover:bg-gray-300 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  addQuantiy(data,setItem);
                }}
              >
                +
              </div>
            </div>

    </div>
  )
}

export default Quantity
