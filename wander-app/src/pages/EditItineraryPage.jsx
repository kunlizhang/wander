import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function EditItineraryPage() {
    const navigate = useNavigate();
    const [expandedDays, setExpandedDays] = useState({
        "Jan 1": true,
        "Jan 2": false,
        "Jan 3": false
    });

    const [items, setItems] = useState({
        "Jan 1": [
            "Pike Place Market",
            "Etta's Seafood",
            "Gum Wall"
        ],
        "Jan 2": [
            "Seattle Art Museum",
            "Space Needle",
            "Chihuly Glass Museum",
        ],
        "Jan 3": [
            "Gas Works Park",
            "Mako Sushi",
            "Pike Place Night Market"
        ]
    });

    const onDragEnd = (result) => {
        if (!result.destination) return;
        
        const sourceDay = result.source.droppableId;
        const destDay = result.destination.droppableId;
        
        const newItems = {...items};
        const [reorderedItem] = newItems[sourceDay].splice(result.source.index, 1);
        newItems[destDay].splice(result.destination.index, 0, reorderedItem);
        
        setItems(newItems);
    };

    return (
        <div className="flex justify-center w-full h-full ">
        <div className="flex flex-col h-screen w-96 bg-white">
            {/* Header */}
            <div className="px-4 py-6 border-b">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-xl font-semibold">Jimmy's Seattle Adventure</h1>
                </div>
                <p className="text-sm text-gray-500 ml-8">Jan 1 - Jan 3</p>
            </div>

            {/* Draggable Content */}
            <div className="flex-1 overflow-auto">
                <DragDropContext onDragEnd={onDragEnd}>
                    {Object.entries(items).map(([day, destinations]) => (
                        <div key={day} className="px-4 py-2">
                            <div 
                                className="flex items-center gap-2 py-2"
                                onClick={() => setExpandedDays(prev => ({...prev, [day]: !prev[day]}))}
                            >
                                <h2 className="font-semibold">{day}</h2>
                                <svg 
                                    className={`w-5 h-5 ml-auto transform transition-transform ${expandedDays[day] ? 'rotate-180' : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {expandedDays[day] && (
                                <Droppable droppableId={day}>
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="space-y-2"
                                        >
                                            {destinations.map((destination, index) => (
                                                <Draggable 
                                                    key={destination} 
                                                    draggableId={destination} 
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            className="flex items-center bg-gray-100 rounded-lg p-3"
                                                        >
                                                            <div {...provided.dragHandleProps} className="mr-3">
                                                                ⋮⋮
                                                            </div>
                                                            {destination}
                                                            <svg className="w-5 h-5 ml-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            )}
                        </div>
                    ))}
                </DragDropContext>
            </div>

            {/* Confirm Button */}
            <div className="p-4">
                <button 
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold"
                    onClick={() => navigate(-1)}
                >
                    Confirm
                </button>
            </div>
        </div>
        </div>
    );
}

export default EditItineraryPage; 