import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "../components/DateTimePicker";
import CustomWants from "../components/CustomWants";

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
                <div className="text-2xl font-bold my-6">How long will you be in Seattle?</div>
                <div className="text-md">From</div>
                <DateTimePicker dateRequired={true} timeRequired={false} defaultTime="08:00"/>
                <div className="text-md mt-2">To</div>
                <DateTimePicker dateRequired={true} timeRequired={false} defaultTime="18:00"/>
                <div className="text-2xl font-bold my-4">What do you want to do?</div>
                <CustomWants />
            </div>
            <div className="fixed bottom-4 w-96 flex justify-between">
                <BackButton text="Back" onClick={handleBack} />
                <PrimaryButton text="Generate Itinerary!" onClick={handleGenerate} />
            </div>
        </div>
  );
}

export default TripInitPage;