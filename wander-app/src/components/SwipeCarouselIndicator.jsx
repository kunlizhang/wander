import React from 'react';

function SwipeCarouselIndicator({ barCount, brightCount }) {
    const bars = Array.from({ length: barCount }, (_, index) => index);

    return (
        <div className="flex space-x-2">
        {bars.map((index) => (
            <div
            key={index}
            className={`h-2 rounded bg-primaryGreen2 ${
                index == brightCount ? 'opacity-100 w-8' : 'opacity-40 w-4'
            } transition-opacity transition-transform duration-200`}
            />
        ))}
        </div>
    );
}

export default SwipeCarouselIndicator;