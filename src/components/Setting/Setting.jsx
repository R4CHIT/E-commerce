
import React from "react";

import General from "./components/General";
import Location from "./components/Location";
import Password from "./components/Password";
import DeleteAccount from "./components/DeleteAccount";
import Navbar from "../NavBar/NavBar";
const Setting = () => {
  return (
    <div className="p-20 flex flex-col h-[100vh]">
      <Navbar />
      <div className=" flex flex-col my-4 gap-4">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;
