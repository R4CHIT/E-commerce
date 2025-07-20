import React, { useState } from "react";

const CheckoutModal = ({ visible, setVisible, product }) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");

  const handleSubmit = () => {
    // const formdata = new FormData();
    // formdata.append("firstname", firstName);
    // formdata.append("lastname", lastName);
    // formdata.append("country", country);
    // formdata.append("state", state);
    // formdata.append("city", city);
    // formdata.append("postalcode", postalcode);
    // formdata.append("productsDetail",JSON.stringify(product));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={() => setVisible((prev) => !prev)}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-6 p-8 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-2xl font-semibold text-[#111827]">
          Billing Detail
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">~
          <div className="flex gap-3 w-full">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="firstName"
                className="text-sm text-[#6B7280] mb-1"
              >
                First name
              </label>
              <input
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md text-[#111827] p-2 outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-sm text-[#6B7280] mb-1">
                Last name
              </label>
              <input
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md text-[#111827] p-2 outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <label className="text-sm text-[#6B7280] mb-1">Country</label>
            <input
              type="text"
              placeholder="Enter your Country"
              className="p-2 bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] rounded-md outline-none focus:ring-2 focus:ring-white"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm text-[#6B7280] mb-1">State</label>
            <input
              type="text"
              placeholder="Enter your State"
              className="p-2 bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] rounded-md outline-none focus:ring-2 focus:ring-white"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm text-[#6B7280] mb-1">City</label>
            <input
              type="text"
              placeholder="Enter your City"
              className="p-2 bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] rounded-md outline-none focus:ring-2 focus:ring-white"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm text-[#6B7280] mb-1">Postal Code</label>
            <input
              type="text"
              placeholder="Enter your Postal Code"
              className="p-2 bg-[#F9FAFB] text-[#111827] border border-[#E5E7EB] rounded-md outline-none focus:ring-2 focus:ring-white"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
            />
          </div>

          <div className="pt-2">
            <button
              className="bg-red-500 hover:bg-black text-white font-medium px-6 py-2 rounded-md transition-all duration-200"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
