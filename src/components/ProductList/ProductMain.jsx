import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import SideBar from "./components/SideBar";
import Product from "./components/Product";
import { useOutletContext } from "react-router";
const ProductMain = () => {
  const productData = useOutletContext();
  const [data, setData] = useState([productData] || null);
  useEffect(() => {
    setData(productData);
  }, [productData]);
  console.log(data);
  return (
    <>
      <Navbar setProductData={setData}/>
      <div className="pt-24 flex">
        <div className="w-1/5 hidden md:block">
          <SideBar setData={setData} productData={productData} />
        </div>

        <div className="flex-1 px-6">
          <Product data={data} />
        </div>
      </div>
    </>
  );
};

export default ProductMain;
