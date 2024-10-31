import React, { useState } from 'react';

function RangeSlider({ minValue, maxValue}) {
  const [value, setValue] = useState(50); // Initial value for the slider

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="mb-2 text-xl font-bold">${value} per day</div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChange}
        className="slider w-full h-2 appearance-none bg-gray-300 rounded-lg"
        style={{
          background: `linear-gradient(to right, #325D59 ${value/maxValue*100}%, #e5e7eb ${value/maxValue*100}%)`,
        }}
      />
      <style jsx>{`
        /* Slider Knob Styling */
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: #325D59;
          cursor: pointer;
          border-radius: 50%;
          position: relative;
          top: -2px; /* Center the knob */
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #3b82f6;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }
        .slider::-ms-thumb {
          width: 24px;
          height: 24px;
          background: #3b82f6;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }

        /* Track Styling */
        .slider::-webkit-slider-runnable-track {
          border-radius: 5px;
        }
        .slider::-moz-range-track {
          height: 4px;
          border-radius: 5px;
        }
        .slider::-ms-track {
          height: 4px;
          border-radius: 5px;
          background: transparent;
          border-color: transparent;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default RangeSlider;