import React from 'react';

const InputDetails = ({ label, placeholder, ref, error }) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
        {label}:
      </label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full border ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:ring-2 min-h-[40px] px-3 py-2 rounded-md text-sm sm:text-base`}
      />
      {error && <div className="text-red-500 text-sm mt-1">Invalid Details</div>}
    </div>
  );
};

export default InputDetails;
