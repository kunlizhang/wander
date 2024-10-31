import React, { useState } from 'react';

const RangeSlider = () => {
  const [value, setValue] = useState(50); // Initial value for the slider

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="">
      <div className="w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="slider w-full"
          style={{ 
            background: `linear-gradient(to right, #4F46E5 ${value}%, #d1d5db ${value}%)`
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;