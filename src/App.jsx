import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Homepage from './components/herosection/Homepage'
import Footer from './components/footer/footer'
import Categories from './components/category/Categories'
import Popularitem from './components/Product/Popularitem'
import productDataApi from './components/Api/productData.api'
import { useState,useEffect } from 'react'
const App = () => {
  const [productData, setProductData] = useState([]);
  const [maindata,setmainData] = useState([])
  useEffect(() => {
    productDataApi(setProductData,setmainData);
  }, []);
  return (
    <div className=''>
      
      <Navbar maindata={maindata} setProductData={setProductData}/>
      <Homepage />
      <div id='product'>
      <Categories setProductData={setProductData} maindata={maindata} />
      </div>
      <div >
      <Popularitem  productData={productData} maindata={maindata}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
