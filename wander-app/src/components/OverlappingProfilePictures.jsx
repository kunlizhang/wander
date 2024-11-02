import React from "react";

function OverlappingProfilePictures({ images }) {
    const top3Images = images.slice(0, 3);
    return (
        <div className="flex">
            {top3Images.map((image, index) => (
                <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                        marginLeft: index === 0 ? '0' : '-15px', // Overlap each picture
                        zIndex: images.length - index, // Higher z-index for the first images
                    }}
                ></div>
            ))}
        </div>
    );
}

export default OverlappingProfilePictures;