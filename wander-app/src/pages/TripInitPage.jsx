import React from "react";
import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import CategoryGrid from "../components/CategoryGrid";
import categories from "../backend/categories.json";

function TripInitPage() {
  return (
    <div className="flex justify-center w-full min-h-screen">
        <div className="w-96">
            <div className="text-4xl font-bold mb-8">Hi Jimmy!</div>
            <ProgressBar brightCount={2} />
            <div className="text-2xl font-bold mt-6">What do you enjoy doing?</div>
        </div>
        <div className="fixed bottom-4 w-96 flex justify-between">
            <BackButton text="Back" onClick={() => {}} width="32" height="12" />
            <PrimaryButton text="Next" onClick={() => {}} width="32" height="12" />
        </div>
    </div>
    
  );
}

export default TripInitPage;