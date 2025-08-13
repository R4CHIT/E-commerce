import React, { useState } from "react";
import Card from "../Product/component/Card";
import AddProductDetailComponent from "./Component/AddProductDetailComponent";
import { useLocation, useNavigate } from "react-router-dom";
import OrangeButton from "../Button/OrangeButton";
import addproductApi from "../Api/product/addProductApi";
import updateProduct from "../Api/product/updateProduct";
import Navbar from '../NavBar/Navbar'
import { MdKeyboardBackspace } from "react-icons/md";
const AddProduct = () => {
  const user = JSON.parse(localStorage.getItem('userDetails'))
  if(!user || user?.role == 'user'){
    window.location.href = '/' 
  }
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate()
  const temp = {
    productName: "",
    features: [],
    price: 0,
    image: "",
    rating: 0,
    category: '',
    description: '',
    availableStock: '',
  };
  
  const [productDetail, setProductDetail] = useState(data ? data : temp);

  const handleProceed=async()=>{
    await addproductApi(productDetail)
  }
  const handleUpdate=async()=>{
    await updateProduct(productDetail)
    window.location.href = '/'
  }
  return (
    <>
    
    <div className="h-[100xh] p-5 flex flex-col px-20 ">
       
      <div
        className="text-white p-1 px-2 bg-gray-500 hover:bg-gray-600 rounded-md w-fit font-medium flex items-center gap-2 text-sm cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <MdKeyboardBackspace size={20} /> <span>Go Back</span>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center my-2 italic">
          {data ? "Update Product" : "Add Product"}
        </h1>
      </div>

      <div className="flex-1  md:flex gap-10 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-[]  md:w-[40%]">
          <Card item={productDetail} />
          <div className=" hidden md:flex  mx-5 font-medium text-gray-500">
            Add a new product or update existing details here to keep your
            catalog accurate and up to date. Make sure to fill in all required
            fields for the best results.
          </div>
        </div>
        <div className="flex-1 ">
          <div className="text-center text-gray-500 font-semibold italic text-2xl">
            Product Detail
          </div>
          <AddProductDetailComponent
            setProductDetail={setProductDetail}
            productDetail={productDetail}
          />
        </div>
      </div>
      {data ?(<OrangeButton title={'Proceed'} onClick={()=>handleUpdate()}/>): (<OrangeButton title={'Proceed'} onClick={()=>handleProceed()}/>)}
    </div>
    </>
  );
};

export default AddProduct;
