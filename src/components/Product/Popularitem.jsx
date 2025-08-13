import React, { useEffect, useState } from "react";

import productDataApi from "../Api/productData.api";
import ProductModal from "./Modal/ProductModal";
import Card from "./component/Card";
import { useOutlet, useOutletContext } from "react-router";

function Popularitem({productData}) {
  
  return (
    <>
      
        <div className="mx-10 md:px-10 lg:px-20 md:mt-10 bg-whiten" >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {productData.map((item) => (
            <Card item={item} key={item._id} />
      ))}
          </div>
        </div>
    </>
  );
}

export default Popularitem;
