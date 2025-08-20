import React, { useState } from "react";
import General from "./components/General";
import Location from "./components/Location";
import Password from "./components/Password";
import DeleteAccount from "./components/DeleteAccount";
import Navbar from "../NavBar/NavBar";
import Sidebar from './components/SideBar'
import { FaBars } from "react-icons/fa";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <General />;
      case "location":
        return <Location />;
      case "password":
        return <Password />;
      case "delete":
        return <DeleteAccount />;
      default:
        return <General />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />
      <div className="md:hidden flex px-4 py-2 ">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 bg-white rounded-md shadow-md absolute z-10 mt-22"
        >
          <FaBars size={24} />
        </button>
      </div>

      <div className="flex h-screen bg-sky-50 pt-20">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Setting;
