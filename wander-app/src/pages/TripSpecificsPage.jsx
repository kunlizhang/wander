import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "../components/DateTimePicker";
import CustomWants from "../components/CustomWants";
import CheckableGrid from "../components/CheckableGrid";
import transportModes from "../backend/transportation-options.json";
import RangeSlider from "../components/RangeSlider";

function TripInitPage() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/trip");
    }
    const handleGenerate = () => {
        navigate("/generated");
    }

    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-96">
                <div className="mt-20"></div>
                <div className="text-4xl font-bold mb-12">Let's plan your trip!</div>
                <ProgressBar brightCount={3} />
                <div className="text-2xl font-bold mt-6">What is your budget?</div>
                <div className="text-md mb-6">This is your budget for exploration, excluding accomondations and flights.</div>
                <RangeSlider minValue="0" maxValue="1000"/>
                <div className="text-2xl font-bold my-6">How would you like to get around?</div>
                <div className="mt-4"></div>
                <CheckableGrid items={transportModes} />
            </div>
            <div className="fixed bottom-4 w-96 flex justify-between">
                <BackButton text="Back" onClick={handleBack} />
                <PrimaryButton text="Generate Itinerary!" onClick={handleGenerate} />
            </div>
        </div>
  );
}

export default TripInitPage;