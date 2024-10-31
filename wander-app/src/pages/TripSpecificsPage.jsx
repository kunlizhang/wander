import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import ClearableInput from "../components/ClearableInput";
import RangeSlider from "../components/RangeSlider";
import Checkable from "../components/Checkable";
import transportModes from "../backend/transportation-options.json";
import { Checkbox } from "@mui/material";
import CheckableGrid from "../components/CheckableGrid";
import DateTimePicker from "../components/DateTimePicker";

function TripInitPage() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/trip");
    }

    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-96">
                <div className="text-4xl font-bold mb-12">Let's plan your trip!</div>
                <ProgressBar brightCount={3} />
                <div className="text-2xl font-bold my-6">How long will you be in Seattle?</div>
                <div className="text-md">From</div>
                <DateTimePicker />
                <div className="text-md mt-2">To</div>
                <DateTimePicker />
                <div className="text-2xl font-bold my-4">What do you want to do?</div>
                <ClearableInput placeholder="ex. Space Needle" />
            </div>
            <div className="fixed bottom-4 w-96 flex justify-between">
                <BackButton text="Back" onClick={handleBack} width="32" height="12" />
                <PrimaryButton text="Generate Itinerary!" onClick={() => {}} width="48" height="12" />
            </div>
        </div>
  );
}

export default TripInitPage;