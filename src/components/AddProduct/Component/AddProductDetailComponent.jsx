import React, { useState } from "react";
import ProductInputField from "../../Inputfields/productInputFields";
import AddFeature from "./AddFeature";
import AddCategory from "./AddCategory";
import OrangeButton from "../../Button/OrangeButton";

const AddProductDetailComponent = ({ setProductDetail, productDetail }) => {
  return (
    <div>
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Name"}
        name={"productName"}
        productDetail={productDetail}
      />

      <AddFeature
        productDetail={productDetail}
        setProductDetail={setProductDetail}
      />

      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Rating"}
        name={"rating"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Image"}
        name={"image"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Price"}
        name={"price"}
        productDetail={productDetail}
      />
      <AddCategory
        setProductDetail={setProductDetail}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Description"}
        name={"description"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Stock"}
        name={"availableStock"}
        productDetail={productDetail}
      />
      
    </div>
  );
};

export default AddProductDetailComponent;
