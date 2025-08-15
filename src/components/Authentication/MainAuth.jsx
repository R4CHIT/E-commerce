import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./login/Login";

const MainAuth = () => {
  const [screen, setScreen] = useState(true);

  return (
    <div
  className="flex min-h-screen w-full justify-center items-center p-6"
  style={{
    backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('https://www.nudient.co.uk/cdn/shop/files/00-000-0102-0002_5_a7b564f7-7206-401b-93bf-5a5a0d047df6.jpg?v=1724931169&width=1500')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>


  


      <div className="max-w-4xl w-full flex flex-col md:flex-row bg-white/50 rounded-2xl shadow-xl shadow-black/30 overflow-hidden">
        
        
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://img.freepik.com/free-photo/ramadan-phones-crescent-front-side_187299-35735.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Mobile Phones"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold text-center px-4">
              Find Your Perfect Mobile
            </h2>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          {screen ? (
            <Signup setScreen={setScreen} />
          ) : (
            <Login setScreen={setScreen} />
          )}

          {/* Switch Text */}
          
        </div>
      </div>
    </div>
  );
};

export default MainAuth;
