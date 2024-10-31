import React from 'react';

function ProgressBar({ brightCount }) {
  const bars = [0, 1, 2]; // Represent the three bars

  return (
    <div className="flex space-x-1">
      {bars.map((index) => (
        <div
          key={index}
          className={`w-20 h-2 rounded opacity-80 ${
            index < brightCount ? 'bg-primaryGreen2' : 'bg-gray-300'
          } transition-colors duration-200`}
        />
      ))}
    </div>
  );
}

export default ProgressBar;