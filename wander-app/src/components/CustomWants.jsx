import React from "react";
import ClearableInput from "./ClearableInput";
import Pill from "./Pill";

function CustomWants() {
    const [myWants, setMyWants] = React.useState([]);

    const handleKeyDown = (event) => {
        if (event !== '') {
            setMyWants([...myWants, event]);
        }
    };

    const removeWant = (index) => {
        const newWants = [...myWants];
        newWants.splice(index, 1);
        setMyWants(newWants);
    };

    return (
        <div className="w-full ">
            <ClearableInput placeholder="ex. Space Needle" keyDownEvent={handleKeyDown} clearAfterEnter={true}/>
            <div className="mt-2"></div>
            <div className="flex flex-wrap gap-2 max-w-4xl mx-auto h-max max-h-48 overflow-y-auto">
                {myWants.map((want, index) => (
                    <Pill text={want} key={index} onClick={() => removeWant(index)} height="8"/>
                ))}
            </div>
        </div>
    );
}

export default CustomWants;