import React, { useState } from 'react'
import Signup from './Signup/Signup';
import Login from './login/Login';
const MainAuth = () => {
    const [screen,setScreen] = useState(true);
  return (
    <div className='bg-pink-100 flex h-[100vh] w-[100vw] justify-center items-center'>
      <div className='w-110 border-slate-400 rounded-xl shadow-lg shadow-black/50 bg-white h-110'>
        {screen ? (
            <Signup />
        ):(
            <Login />
        )}
      </div>
    </div>
  )
}

export default MainAuth;