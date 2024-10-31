import React from "react";
import CategoryButton from "../components/CategoryButton";
import MuseumImg from "../assets/museum.jpg";
import ProgressBar from "../components/ProgressBar";

function WelcomePage() {
  return (
    <div className="max-w-92">
        <div className="text-4xl font-bold mb-8">Hi Jimmy!</div>
        <ProgressBar brightCount={1} />
        <div className="text-2xl font-bold mt-8">What do you enjoy doing?</div>
        <CategoryButton imageSrc={MuseumImg} text="Museums" />
    </div>
  );
}

export default WelcomePage;