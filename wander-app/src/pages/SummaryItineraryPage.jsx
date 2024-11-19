import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import itineraryInfo from "../backend/itineraryInfo.json";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";

function SummaryItineraryPage() {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate('/edit');
    };
    const [expandedDays, setExpandedDays] = useState({
        "Jan 1": true,
        "Jan 2": false,
        "Jan 3": false
    });

    const toggleDay = (day) => {
        setExpandedDays(prev => ({
            ...prev,
            [day]: !prev[day]
        }));
    };

    // Assuming itineraryInfo is structured by days
    const dailyItineraries = {
        "Jan 1": itineraryInfo["Downtown Food Tour"],
        "Jan 2": itineraryInfo["Seattle Art Tour"],
        "Jan 3": itineraryInfo["Local Neighborhoods"]
    };

    return (
        <div className="flex justify-center w-full h-full ">
        <div className="flex flex-col h-screen w-96 bg-white">
            {/* Header - unchanged */}
            <div className="px-4 py-6 border-b">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex-1">
                        <h1 className="text-xl font-semibold">Jimmy's Seattle Adventure</h1>
                        <p className="text-sm text-gray-500">Jan 1 - Jan 3</p>
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Timeline Content */}
            <div className="flex-1 overflow-auto px-4 py-6">
                {Object.entries(dailyItineraries).map(([day, stops]) => (
                    <div key={day} className="mb-6">
                        {/* Date Header with Dropdown */}
                        <div 
                            className="mb-4 flex items-center gap-2 cursor-pointer" 
                            onClick={() => toggleDay(day)}
                        >
                            <h2 className="font-semibold">{day}</h2>
                            <button className="ml-auto">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`h-5 w-5 transform transition-transform ${expandedDays[day] ? 'rotate-180' : ''}`} 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Timeline Items */}
                        {expandedDays[day] && (
                            <div className="relative">
                                <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-primaryGreen2"></div>
                                
                                {stops.map((stop, index) => (
                                    <div key={index} className="mb-6">
                                        {/* Location */}
                                        <div className="flex items-start gap-3">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full border-3 border-primaryGreen2 bg-white"></div>
                                                <span className="text-sm text-gray-600 whitespace-nowrap">{stop.time}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{stop.name}</h3>
                                                <p className="text-sm text-gray-600 mb-2">{stop.shortdescription}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {stop.tags.map((tag, tagIndex) => (
                                                        <span 
                                                            key={tagIndex}
                                                            className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Transportation */}
                                        {index < stops.length - 1 && (
                                            <div className="flex items-center gap-3 mt-3 ml-[14px]">
                                                <div className="w-6 flex justify-center">
                                                    {stop.transport.type === 'walk' ? '🚶' : '🚌'}
                                                </div>
                                                <span className="text-sm text-gray-600">
                                                    {stop.transport.duration} {stop.transport.type}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Buttons - unchanged */}
            <div className="fixed bottom-4 w-96 flex justify-between">
                <BackButton text="Edit" onClick={handleEditClick} />
                <PrimaryButton text="Save" onClick={()=>{}} />
            </div>
       
        </div>
        </div>
    );
}



export default SummaryItineraryPage;