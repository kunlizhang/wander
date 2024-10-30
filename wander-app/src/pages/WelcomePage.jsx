import React from "react";
import CategoryButton from "../components/CategoryButton";
import ReactLogo from "../assets/react.svg";

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to Wander</h1>
      <CategoryButton imageSrc={ReactLogo} text="Nature" />
    </div>
  );
}

export default WelcomePage;