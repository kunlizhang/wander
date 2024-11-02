import React from "react";
import OverlappingProfilePictures from "./OverlappingProfilePictures";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ItineraryDisplayItem({ title, durationText, image, fans=[], nextHandler, previousHandler}) {
    const fanCount = fans.length;

    const fanText = fanCount < 3 ? "" : fans[0] + ", " + fans[1] + " and " + (fanCount - 2) + " others love this itinerary!"; 
    return (
        <div className={`relative w-80 h-64 rounded-2xl overflow-hidden`}>
            <img src={image} alt="button background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60">
                <div className="ml-4 mt-4 text-neutralWhite font-semibold text-sm">{durationText}</div>
                <div className="ml-4 mb-4 text-neutralWhite font-bold text-lg">{title}</div>
                <div className="absolute bottom-2 ml-4 mb-4 text-neutralWhite text-xs">
                    <div className="flex">
                        <OverlappingProfilePictures images={["assets/bars.jpg", "assets/brunch.jpg", "assets/parks.jpg"]} />
                        <div className="ml-2 p-2">{fanText}</div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button className="text-neutralWhite font-bold px-2 ml-2 mb-4 w-12 h-12" onClick={previousHandler}>
                    <ArrowBackIosIcon />
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button className="text-neutralWhite font-bold px-2 ml-2 mb-4 w-12 h-12" onClick={nextHandler}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
}

export default ItineraryDisplayItem;