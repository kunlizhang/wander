import React from "react";

function BackButton({ text, onClick}) {
    return (
        <button className={`outline outline-2 outline-gray-300 text-neutralBlack font-semibold 
            rounded-lg py-2 px-4 h-12 min-w-20`
            } onClick={onClick}>
        {text}
        </button>
    );
    }

export default BackButton;