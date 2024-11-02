import React from "react";
import OverlappingProfilePictures from "./OverlappingProfilePictures";

function ItineraryDisplayItem({ title, durationText, image, fans=[]}) {
    const fanCount = fans.length;

    const fanText = fanCount < 3 ? "" : fans[0] + ", " + fans[1] + " and " + (fanCount - 2) + " others love this itinerary!"; 
    return (
        <div className={`relative w-80 h-56 rounded-2xl overflow-hidden`}>
            {/* Text overlay */}
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
        </div>
    );
}

export default ItineraryDisplayItem;