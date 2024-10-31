import React, { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Checkable({ text, width, height }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 w-${width} h-${height} rounded-lg font-semibold transition-colors ${
        isChecked ? 'bg-primaryGreen2 bg-opacity-60 text-neutralBlack' : 'bg-gray-300 text-neutralBlack'
      }`}
    >
      {isChecked ? (
        <CheckBoxIcon className="text-primaryGreen" />
      ) : (
        <CheckBoxOutlineBlankIcon className="text-neutralBlack" />
      )}
        {text}
    </button>
  );
};

export default Checkable;