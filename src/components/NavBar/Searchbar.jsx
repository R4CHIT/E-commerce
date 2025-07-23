import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useNavigate } from "react-router";
import { useLocation } from "react-router";

const Searchbar = ({ setProductData, maindata }) => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    const element = document.getElementById('product'); // target element's ID
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  };
 
    useEffect(() => {
       
      let temp = maindata.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setProductData(temp);
      console.log(search);
    
    }, [search,location.pathname]);
  
  return (
    <div>
      <div className="flex items-center bg-gray-100 rounded-2xl text-black h-10 w-60 justify-between px-2">
        <input
          type="text"
          className="text-[15px] outline-none bg-transparent w-full px-2"
          placeholder="Search here"
          onClick={() => handleSearch()}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoIosSearch className="text-xl" />
      </div>
    </div>
  );
};

export default Searchbar;
