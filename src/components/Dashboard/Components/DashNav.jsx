import React from "react";
import { RiDashboardFill, RiShoppingBagFill, RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: "Dashboard", icon: <RiDashboardFill />, action: () => setActiveScreen(1) },
    { id: 2, label: "Order", icon: <RiShoppingBagFill />, action: () => setActiveScreen(2) },
    { id: 3, label: "Add Product", icon: <RiAddCircleFill />, action: () => navigate("/addProduct") },
  ];

  return (
    <div className="w-[15%] bg-orange-300 p-5 flex flex-col gap-5 items-center md:block md:space-y-7 min-h-screen">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`flex lg:justify-start justify-center items-center gap-3 p-4 rounded-md cursor-pointer transition-all duration-200 
            ${activeScreen === item.id ? "bg-orange-500 text-white shadow-lg shadow-orange-200" : "bg-orange-400 text-white hover:bg-orange-500 hover:shadow-md hover:shadow-orange-100"}
          `}
          onClick={item.action}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="hidden lg:flex font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DashNav;
