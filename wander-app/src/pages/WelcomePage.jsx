import React from "react";
import CategoryButton from "../components/CategoryButton";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import CategoryGrid from "../components/CategoryGrid";
import categories from "../backend/categories.json";

function WelcomePage() {
  return (
    <div className="flex justify-center w-full">
        <div className="w-96">
            <div className="text-4xl font-bold mb-8">Hi Jimmy!</div>
            <ProgressBar brightCount={1} />
            <div className="text-2xl font-bold mt-6">What do you enjoy doing?</div>
            <div className="mt-4"></div>
            <CategoryGrid categories={categories} />
            <div className="mt-4"></div>
            <PrimaryButton text="Next" onClick={() => {}} width="full" height="12" />
        </div>
    </div>
    
  );
}

export default WelcomePage;