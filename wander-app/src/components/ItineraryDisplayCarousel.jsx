import React from "react";
import ItineraryDisplayItem from "./ItineraryDisplayItem";

function ItineraryDisplayCarousel({ items, currentIndex, setCurrentIndex }) {
    

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <div className="transition-all duration-200">
            <ItineraryDisplayItem title={items[currentIndex].title} 
                durationText={items[currentIndex].durationText} 
                image={items[currentIndex].image} fans={items[currentIndex].fans} 
                nextHandler={handleNext} previousHandler={handlePrevious} />
        </div>
    );
}

export default ItineraryDisplayCarousel;