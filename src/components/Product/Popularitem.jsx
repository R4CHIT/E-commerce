import React, { useEffect, useState } from "react";

import productDataApi from "../Api/productData.api";
import ProductModal from "./Modal/ProductModal";
import Card from "./component/Card";
function Popularitem() {
  
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    productDataApi(setProductData);
  }, []);
  const handlleShowModal = (id) => {
    const selectedItem = product.find((item) => item.id === id);
    if (selectedItem) {
      setData(selectedItem);
      setShowModal(!showModal);
    }
  };
  
  return (
    <>
      
        <div className="mx-20 md:px-10 lg:px-20 bg-whiten mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {productData.map((item) => (
            <Card item={item} key={item.id} />
      ))}
          </div>
        </div>
    
    </>
  );
}

export default Popularitem;
