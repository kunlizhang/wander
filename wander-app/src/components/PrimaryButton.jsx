import React from "react";

function PrimaryButton({ text, onClick}) {
    return (
        <button className={`bg-primaryGreen2 text-neutralWhite font-semibold 
            rounded-lg py-2 px-4 h-12 min-w-32`
            } onClick={onClick}>
        {text}
        </button>
    );
    }

export default PrimaryButton;