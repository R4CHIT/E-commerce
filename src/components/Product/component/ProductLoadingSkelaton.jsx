import React from "react";

const Loading = () => {
  return (
    <div className="bg-white rounded-2xl w-full md:w-[20vw] min-h-[350px] shadow-md border border-gray-100 overflow-hidden relative animate-pulse duration-75">
      
     
      <div className="absolute z-20 top-3 left-3">
        <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
      </div>
      
      <div className="relative">
        <div className="w-full h-60 bg-gray-200 rounded-t-2xl"></div>
        
     
        <div className="absolute top-3 right-3 z-20">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>

    
      <div className="p-4 flex flex-col justify-between h-[calc(100%-240px)]">
        <div>
          
          <div className="text-center mb-1">
            <div className="h-4 w-16 bg-gray-200 rounded mx-auto"></div>
          </div>
          
          
          <div className="flex justify-between items-center mb-2">
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="w-4 h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-7 w-16 bg-gray-200 rounded"></div>
          <div className="h-9 w-24 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
