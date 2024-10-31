import React from "react";

function OtherButton({ text, onClick, width, height}) {
    return (
        <button className={`bg-grey-50 text-secondaryTeal font-semibold outline
            outline-2 outline-secondaryTeal rounded-lg py-2 px-4 w-${width} h-${height}`
            } onClick={onClick}>
        {text}
        </button>
    );
    }

export default OtherButton;