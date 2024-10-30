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
        isClicked ? 'shadow-[0_4px_15px_rgba(255,165,0,0.8)]' : 'shadow-none'
      }`}
      style={{
        boxShadow: isClicked ? '0px 4px 15px rgba(255, 165, 0, 0.8)' : 'none',
      }}
    >
      <img src={imageSrc} alt="button background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <span className="text-white font-semibold text-xl">{text}</span>
      </div>
    </button>
  );
}

export default CategoryButton;