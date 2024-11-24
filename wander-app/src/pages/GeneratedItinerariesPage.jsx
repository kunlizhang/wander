import React from "react";
import SwipeCarouselIndicator from "../components/SwipeCarouselIndicator";
import TelegramIcon from '@mui/icons-material/Telegram';
import ItineraryDisplayCarousel from "../components/ItineraryDisplayCarousel";
import seattleItinerary from "../backend/seattleItineraries.json";
import { useNavigate } from "react-router-dom";

function GeneratedItinerariesPage() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/walkthrough");
    }
    const handleEditClick = () => {
        navigate('/summary');
    };
    return (
        <div className="flex justify-center w-full h-full ">
            <div className="relative w-96 h-screen bg-cover bg-center bg-[url('assets/downtownTripBackground.png')]">
                <div className="absolute inset-0 bg-gradient-to-b from-neutralWhite to-transparent"></div>
                <div className="relative">
                    <div className="mt-20"></div>
                    <div className="text-4xl font-bold mb-12">Seattle</div>
                    <SwipeCarouselIndicator barCount={seattleItinerary.length} brightCount={currentIndex}/>
                    <div className="mt-12"></div>
                    <div className="flex justify-center">
                        <button 
                            onClick={handleEditClick}
                            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                            <span className="text-small font-medium">Edit</span>

                        </button>
                        <ItineraryDisplayCarousel items={seattleItinerary} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
                    </div>
                    <div className="mt-4"></div>
                    <div className="fixed bottom-4 w-96 flex justify-between">
                        <button className="bg-primaryGreen2 text-neutralWhite font-bold rounded-full px-2 ml-8 mb-4 w-36 h-12" onClick={handleNext}>
                            <TelegramIcon className="text-neutralWhite mr-3 mb-0.5"/>
                            Let's go!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneratedItinerariesPage;