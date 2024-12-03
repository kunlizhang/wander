import React, { useState } from 'react';

function RangeSlider({ minValue, maxValue }) {
  const [value, setValue] = useState(50); // Initial value for the slider

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = (event) => {
    // Ensure the entered value stays within bounds
    const newValue = Math.max(minValue, Math.min(maxValue, Number(event.target.value)));
    // Set input value to the number
    event.target.value = newValue;
    setValue(newValue);
  };

  return (
    <div className="w-full">
      <div className="mb-2 text-xl font-bold">
        <span>$ </span>
        <input
          type="number"
          value={value}
          onChange={handleInputChange}
          className="w-24 text-center border rounded px-2"
        />
        <span> per day</span>
      </div>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleSliderChange}
        className="slider w-full h-2 appearance-none bg-gray-300 rounded-lg"
        style={{
          background: `linear-gradient(to right, #325D59 ${(value / maxValue) * 100}%, #e5e7eb ${(value / maxValue) * 100}%)`,
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
}

export default RangeSlider;