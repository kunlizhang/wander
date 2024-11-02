import React from "react";
import ItineraryDisplayItem from "./ItineraryDisplayItem";

function ItineraryDisplayCarousel({ items, index }) {
    const [currentIndex, setCurrentIndex] = React.useState(index);
    const [currentItem, setCurrentItem] = React.useState(items[currentIndex]);
    

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentItem(items[currentIndex]);
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCurrentItem(items[currentIndex]);
        }
    }

    return (
        <div>
            <ItineraryDisplayItem title={currentItem.title} 
                durationText={currentItem.durationText} 
                image={currentItem.image} fans={currentItem.fans} 
                nextHandler={handleNext} previousHandler={handlePrevious} />
        </div>
    );
}

export default ItineraryDisplayCarousel;