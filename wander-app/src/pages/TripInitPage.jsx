import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import WelcomePage from "./WelcomePage";
import { useNavigate } from "react-router-dom";
import ClearableInput from "../components/ClearableInput";

function TripInitPage() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="flex justify-center w-full min-h-screen">
            <div className="w-96">
                <div className="text-4xl font-bold mb-8">Hi Jimmy!</div>
                <ProgressBar brightCount={2} />
                <div className="text-2xl font-bold mt-6">Where do you want to explore?</div>
                <ClearableInput placeholder="Search for a city" />
            </div>
            <div className="fixed bottom-4 w-96 flex justify-between px-4">
                <BackButton text="Back" onClick={handleBack} width="32" height="12" />
                <PrimaryButton text="Next" onClick={() => {}} width="32" height="12" />
            </div>
        </div>
  );
}

export default TripInitPage;