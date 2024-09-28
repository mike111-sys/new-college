import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT OUR COLLEGE</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          With the extensive education options offered in our campus, set off on
          a life-changing educational adventure. Our innovative curriculum is
          developed to give students the information, expertise, and experience
          they need to succeed in the diverse field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the best
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
