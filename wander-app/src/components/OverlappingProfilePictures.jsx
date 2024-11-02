import React from "react";

function OverlappingProfilePictures({ images }) {
    return (
        <div className="flex">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                        marginLeft: index === 0 ? '0' : '-10px', // Overlap each picture
                        zIndex: images.length - index, // Higher z-index for the first images
                    }}
                ></div>
            ))}
        </div>
    );
}

export default OverlappingProfilePictures;