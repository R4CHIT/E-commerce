import React, { useState, useEffect } from "react";
import DashNav from "./Components/DashNav";
import Dashboard from "./Components/Dashboard";
import Order from "./Components/Order";
import Navbar from "../NavBar/Navbar";
import getOrder from "../Api/Order/getOrder";
import { useOutletContext } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const DashboardMain = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  if (!user || user?.role === "user") {
    window.location.href = "/";
  }

  const [activeScreen, setActiveScreen] = useState(1);
  const maindata = useOutletContext();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrder(setOrder);
  }, []);

  return (
    <>
      
      <Navbar />

      <div className="flex h-screen bg-sky-50 pt-20">
        
        <div className="w-auto border-r bg-white shadow-sm">
          <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
        </div>

        
        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeScreen === 1 && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <Dashboard order={order} productData={maindata} />
              </motion.div>
            )}
            {activeScreen === 2 && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <Order order={order} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
