import React from "react";
import SwipeCarouselIndicator from "../components/SwipeCarouselIndicator";
import TelegramIcon from '@mui/icons-material/Telegram';
import EditIcon from '@mui/icons-material/Edit';
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
                    <div className="flex flex-row justify-between items-center">
                        <SwipeCarouselIndicator barCount={seattleItinerary.length} brightCount={currentIndex}/>
                        <button 
                                onClick={handleEditClick}
                                className="flex flex-row items-center justify-center bg-white rounded-full shadow-md h-12 w-12"
                            >
                                <EditIcon className="text-primaryGreen2"/>
                            </button>
                        
                    </div>
                    <div className="mt-12"></div>
                    <div className="flex justify-center">
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