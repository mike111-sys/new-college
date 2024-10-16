import React from "react";
import arrow_icon from "../../assets/dark-arrow.png";
import heroImage from "../../assets/heroo.jpg"; // Ensure the hero image is imported correctly
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${heroImage})`,
      }}
    >
      <div className="text-center max-w-2xl animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          {" "}
          {/* Adjusted sizes for responsiveness */}
          We guarantee improved learning for a better society
        </h1>
        <p className="max-w-xl mx-auto my-4 text-base md:text-lg">
          {" "}
          {/* Adjusted sizes for responsiveness */}
          Our innovative, cutting-edge curriculum is designed to empower
          students with the knowledge, abilities, and practical experience they
          need to excel in the fast-paced area of education.
        </p>
        <div className="flex justify-center">
          {" "}
          {/* Centering the button */}
          <Link
            to="programs"
            smooth={true}
            offset={-240}
            duration={500}
            className="flex items-center"
          >
            <button className="bg-blue-700 text-white px-6 py-3 rounded-full flex items-center transition duration-300 hover:bg-blue-800">
              Explore more
              <img src={arrow_icon} alt="Arrow Icon" className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
