import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar/Navbar'
import Cartcard from './Cartcard';

const Cart = () => {
    const [item,setItem] = useState([]);
    useEffect(()=>{
        setItem(JSON.parse(localStorage.getItem('cart')))
        console.log(item);
        
    },[])
  return (
    <div className="mx-20 md:px-10 lg:px-20 bg-whiten mt-30">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
     <Navbar />
     {item.map((item) => (
            <Cartcard item={item} key={item.id} />
      ))}
    </div>
    </div>
  )
}

export default Cart
