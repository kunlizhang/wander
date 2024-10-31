import React from "react";

function PrimaryButton({ text, onClick, width, height}) {
    return (
        <button className={`bg-primaryGreen2 text-white font-semibold 
            rounded-lg py-2 px-4 w-${width} h-${height}`
            } onClick={onClick}>
        {text}
        </button>
    );
    }

export default PrimaryButton;