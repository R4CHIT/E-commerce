import React from "react";
import { FaUser, FaMapMarkerAlt, FaLock, FaTrash, FaTimes } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab, isSidebarOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { id: "general", label: "General", icon: <FaUser /> },
    { id: "location", label: "Location", icon: <FaMapMarkerAlt /> },
    { id: "password", label: "Password", icon: <FaLock /> },
    { id: "delete", label: "Delete Account", icon: <FaTrash /> },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 bg-opacity-30 z-20 md:hidden transition-opacity 
          ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-30 transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:shadow-none`}
      >
        
        <div className="md:hidden flex justify-end mb-4 pt-20">
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        
        <h2 className="text-lg font-bold text-gray-700 mb-8 hidden lg:block">
          Settings Menu
        </h2>

        
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 relative text-left
                ${
                  activeTab === item.id
                    ? "bg-orange-50 text-orange-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100 hover:text-orange-500"
                }`}
            >
             
              {activeTab === item.id && (
                <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-r-lg"></span>
              )}
              <span className="text-lg">{item.icon}</span>
              <span className="flex text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
