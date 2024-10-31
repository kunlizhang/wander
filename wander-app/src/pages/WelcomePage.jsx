import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import CategoryGrid from "../components/CategoryGrid";
import { useNavigate } from "react-router-dom"; 
import categories from "../backend/categories.json";

function WelcomePage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/trip");
    }
    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-96">
                <div className="text-4xl font-bold mb-12">Hi Jimmy!</div>
                <ProgressBar brightCount={1} />
                <div className="text-2xl font-bold mt-6">What do you enjoy doing?</div>
                <div className="mt-4"></div>
                <CategoryGrid categories={categories} />
                <div className="mt-4"></div>
            </div>
            <div className="fixed bottom-4 w-96 flex justify-center">
                <PrimaryButton text="Next" onClick={handleClick} width="96" height="12" />
            </div>
        </div>
  );
}

export default WelcomePage;