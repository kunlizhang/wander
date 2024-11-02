import React from "react";
import SwipeCarouselIndicator from "../components/SwipeCarouselIndicator";
import TelegramIcon from '@mui/icons-material/Telegram';
import ItineraryDisplayCarousel from "../components/ItineraryDisplayCarousel";
import seattleItinerary from "../backend/seattleItineraries.json";

function GeneratedItinerariesPage() {
    return (
        <div className="flex justify-center w-full h-full ">
            <div className="relative w-96 h-screen bg-cover bg-center bg-[url('assets/downtownTripBackground.png')]">
                <div className="absolute inset-0 bg-gradient-to-b from-neutralWhite to-transparent"></div>
                <div className="relative">
                    <div className="mt-20"></div>
                    <div className="text-4xl font-bold mb-12">Seattle</div>
                    <SwipeCarouselIndicator barCount={4} brightCount={0}/>
                    <div className="mt-12"></div>
                    <div className="flex justify-center">
                        <ItineraryDisplayCarousel items={seattleItinerary} index={0}/>
                    </div>
                    <div className="mt-4"></div>
                    <div className="fixed bottom-4 w-96 flex justify-between">
                        <button className="bg-primaryGreen2 text-neutralWhite font-bold rounded-full px-2 ml-8 mb-4 w-36 h-12">
                            <TelegramIcon className="text-neutralWhite mr-3 mb-0.5" />
                            Let's go!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneratedItinerariesPage;