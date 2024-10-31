import React, { useState } from 'react';

function CategoryButton({ imageSrc, text }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-28 h-20 rounded-xl overflow-hidden transition-all duration-200 ${
        isClicked ? 'shadow-orange-category' : 'shadow-none'
      }`}
      >
      {/* Background Image */}
      <img src={imageSrc} alt="button background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-neutralBlack bg-opacity-50"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-neutralWhite text-lg">{text}</span>
      </div>
    </button>
  );
}

export default CategoryButton;
