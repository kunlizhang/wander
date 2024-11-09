import React from "react";
import SwipeCarouselIndicator from "../components/SwipeCarouselIndicator";
import TelegramIcon from '@mui/icons-material/Telegram';
import ItineraryDisplayCarousel from "../components/ItineraryDisplayCarousel";
import seattleItinerary from "../backend/seattleItineraries.json";
import itineraryInfo from "../backend/itineraryInfo.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ItineraryWalkthroughPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const tourStops = itineraryInfo["Downtown Food Tour"];
    const navigate = useNavigate();
    
    const handleNext = () => {
        if (currentIndex < tourStops.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleBack = () => {
        navigate("/generated");
    };

    const currentStop = tourStops[currentIndex];

    return (
        <div className="flex justify-center w-full h-full">
            <div className="relative w-96 h-screen">
                {/* Map/Image Section */}
                <div 
                    className={currentStop.mapImage}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-neutralWhite to-transparent"></div>
                    {/* Back Button */}
                    <button className="absolute left-4 top-4 bg-white rounded-full p-2 shadow-lg" onClick={handleBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
                
                {/* Info Card */}
                <div className="absolute bottom-0 w-full bg-white rounded-t-3xl shadow-lg p-6">
                    {/* Location Image */}
                    <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
                        <img 
                            src={currentStop.image} 
                            alt={currentStop.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl font-bold mb-2">{currentStop.name}</h2>
                    <p className="text-gray-600 mb-4">
                        {currentStop.description}
                    </p>

                    {/* Duration Info */}
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">{currentStop.duration}</span>
                        <button 
                            className={`bg-green-600 rounded-full p-3 ${
                                currentIndex === tourStops.length - 1 ? 'opacity-50' : ''
                            }`}
                            onClick={handleNext}
                            disabled={currentIndex === tourStops.length - 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ItineraryWalkthroughPage;