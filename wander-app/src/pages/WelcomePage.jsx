import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import CategoryGrid from "../components/CategoryGrid";
import { useNavigate } from "react-router-dom"; 
import categories from "../backend/categories.json";
import OtherButton from "../components/OtherButton";
import BackButton from "../components/BackButton";
function WelcomePage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/tripPlan");
    }

    const handleBack = () => {
            navigate("/");
    }
    
    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-96">
                <div className="mt-20"></div>
                <div className="text-4xl font-bold mb-12">Hi Jimmy!</div>
                <ProgressBar brightCount={2} />
                <div className="text-2xl font-bold mt-6">What do you enjoy doing?</div>
                <div className="mt-4"></div>
                <CategoryGrid categories={categories} />
                <div className="mt-4"></div>
            </div>
            <div className="fixed bottom-4 w-96 flex justify-between">
                <BackButton text="Back" onClick={handleBack} />
                <PrimaryButton text="Next" onClick={handleClick} />
            </div>
        </div>
  );
}

export default WelcomePage;