import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import ClearableInput from "../components/ClearableInput";
import RangeSlider from "../components/RangeSlider";
import Checkable from "../components/Checkable";
import { Checkbox } from "@mui/material";
import CheckableGrid from "../components/CheckableGrid";
import DateTimePicker from "../components/DateTimePicker";

function WelcomePage() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/trip");
    }

    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-96">
                <div className="mt-20"></div>
                <div className="text-4xl font-bold mb-12">Hi Jimmy!</div>
                <ProgressBar brightCount={1} />
                <div className="text-2xl font-bold my-6">Where do you want to explore?</div>
                <ClearableInput placeholder="Search for a city" />
                <div className="text-2xl font-bold my-6">How long will you be there?</div>
                <div className="text-md">From</div>
                <DateTimePicker dateRequired={true} timeRequired={false} defaultDate="2024-12-07" defaultTime="08:00"/>
                <div className="text-md mt-2">To</div>
                <DateTimePicker dateRequired={true} timeRequired={false} defaultDate="2024-12-07" defaultTime="18:00"/>
            </div>
            <div className="fixed bottom-4 w-96 flex justify-end">
                <PrimaryButton text="Next" onClick={handleNext} />
            </div>
        </div>
  );
}

export default WelcomePage;