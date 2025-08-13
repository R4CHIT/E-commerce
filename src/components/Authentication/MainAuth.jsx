import React, { useState } from 'react'
import Signup from './Signup/Signup';
import Login from './login/Login';

const MainAuth = () => {
  const [screen, setScreen] = useState(true);

  return (
    <div className="bg-gradient-to-br from-pink-400 via-pink-200 to-yellow-200 flex min-h-screen w-full justify-center items-center p-6">
  {/* your content */}


      <div className="max-w-md w-full bg-white/50  rounded-2xl shadow-xl shadow-black/30 p-8">
        {screen ? (
          <Signup setScreen={setScreen} />
        ) : (
          <Login setScreen={setScreen} />
        )}
      </div>
    </div>
  )
}

export default MainAuth;
