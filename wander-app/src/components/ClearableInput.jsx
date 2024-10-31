import React, { useState } from 'react';

function ClearableInput({ placeholder }) {
  const [inputValue, setInputValue] = useState('');

  const handleClear = () => setInputValue(''); // Clear the input value

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2.5 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primaryGreen2"
      />
    <button
        onClick={handleClear}
        className="absolute inset-y-0 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
        &times;
    </button>
    </div>
  );
}

export default ClearableInput;