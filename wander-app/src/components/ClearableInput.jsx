import React, { useState, useRef } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

function ClearableInput({ placeholder }) {
    const inputRef = useRef(null);

    const [inputValue, setInputValue] = useState('');

    const handleClear = () => setInputValue(''); // Clear the input value
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            event.target.blur();
        };
    };

    return (
        <div className="relative">
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full p-2.5 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primaryGreen2"
        />
        <button
            onClick={handleClear}
            className="absolute inset-y-0 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
            <ClearIcon />
        </button>
        </div>
    );
}

export default ClearableInput;