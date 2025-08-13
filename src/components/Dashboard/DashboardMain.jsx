import React, { useState,useEffect } from "react";
import DashNav from "./Components/DashNav";
import Dashboard from "./Components/Dashboard";
import Order from "./Components/Order";
import Navbar from "../NavBar/Navbar";
import getOrder from "../Api/Order/getOrder";
import { useOutletContext } from "react-router";

const DashboardMain = () => {
  const user = JSON.parse(localStorage.getItem('userDetails'))
  if(!user || user?.role == 'user'){
    window.location.href = '/' 
  }
  const [activeScreen, setActiveScreen] = useState(1);
  const maindata = useOutletContext()
  const [order,setOrder]=useState([])
  useEffect(() => {
    getOrder(setOrder);
  }, []);
  
  return (
    <>
    <Navbar />
    <div className="flex h-[100vh] bg-sky-50 pt-20">
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {activeScreen == 1 && <Dashboard  order={order} productData={maindata}/>}
      {activeScreen == 2 &&<Order order={order}/>}
    </div>
    </>
  );

};

export default DashboardMain;
