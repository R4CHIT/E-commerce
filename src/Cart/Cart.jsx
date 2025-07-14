import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar/Navbar'
import Cartcard from './Cartcard';

const Cart = () => {
    const [item,setItem] = useState([]);
    useEffect(()=>{
        setItem(JSON.parse(localStorage.getItem('cart')))
    },[])
  return (
    <div className="md:px-10 lg:px-20 bg-whiten mt-30 ">
          <div className="grid grid:cols-1 gap-10">
     <Navbar />
     {item.map((item) => (
            <Cartcard item={item} key={item.id} />
      ))}
    </div>
    </div>
  )
}

export default Cart
