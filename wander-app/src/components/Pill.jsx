import React from "react";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Pill({ text, onClick, height}) {
    return (
        <div className={`bg-primaryGreen text-neutralWhite text-xs
            rounded-xl py-0.5 px-2 w-fit h-${height}`
            } onClick={onClick}>
        {text}
        <IconButton onClick={onClick} size="small" style={{ color: 'white' }}>
            <CloseIcon />
        </IconButton>
        </div>
    );
}

export default Pill;