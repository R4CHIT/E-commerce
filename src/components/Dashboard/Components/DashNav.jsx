import React from "react";
import { RiDashboardFill, RiShoppingBagFill, RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: "Dashboard", icon: <RiDashboardFill />, action: () => setActiveScreen(1) },
    { id: 2, label: "Orders", icon: <RiShoppingBagFill />, action: () => setActiveScreen(2) },
    { id: 3, label: "Add Product", icon: <RiAddCircleFill />, action: () => navigate("/addProduct") },
  ];

  return (
    <div className="w-auto bg-white border-r shadow-sm flex flex-col py-8 px-3 min-h-screen">
      <h2 className="text-lg font-bold text-gray-700 px-4 mb-8 hidden lg:block">Admin Panel</h2>

      <div className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 relative
              ${activeScreen === item.id 
                ? "bg-blue-50 text-blue-600 font-semibold" 
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-500"}
            `}
            onClick={item.action}
          >
            
            {activeScreen === item.id && (
              <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r-lg"></span>
            )}
            <span className="text-xl">{item.icon}</span>
            <span className="hidden lg:flex text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashNav;
