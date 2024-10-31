import React from "react";

function BackButton({ text, onClick, width, height}) {
    return (
        <button className={`outline outline-2 outline-gray-100 text-neutralBlack font-semibold 
            rounded-lg py-2 px-4 w-${width} h-${height}`
            } onClick={onClick}>
        {text}
        </button>
    );
    }

export default BackButton;