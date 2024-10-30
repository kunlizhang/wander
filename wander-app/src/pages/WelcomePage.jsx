import React from "react";
import CategoryButton from "../components/CategoryButton";
import MuseumImg from "../assets/museum.jpg";

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to Wander</h1>
      <CategoryButton imageSrc={MuseumImg} text="Museums" />
    </div>
  );
}

export default WelcomePage;