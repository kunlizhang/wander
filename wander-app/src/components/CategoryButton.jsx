import React, { useState } from 'react';

function CategoryButton({ imageSrc, text }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-64 h-40 rounded-lg overflow-hidden transition-all duration-200 ${
        isClicked ? 'shadow-[5px_5px_15px_rgba(255,140,0,1)]' : 'shadow-none'
      }`}
      style={{
        // Custom inline shadow to make it more intense and offset
        boxShadow: isClicked ? '5px 5px 1px rgba(255, 140, 0, 1)' : 'none',
      }}
    >
      {/* Background Image */}
      <img src={imageSrc} alt="button background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-semibold text-xl">{text}</span>
      </div>
    </button>
  );
}

export default CategoryButton;
