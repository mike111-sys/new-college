import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-7.jpg";
import program_2 from "../../assets/program-8.jpg";
import program_3 from "../../assets/program-9.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import school_bronchur_1 from "../../assets/School details bronchur_1.jpg";
import school_bronchur_2 from "../../assets/School details bronchure_2.jpg";
import exam_bodies from "../../assets/exam-bodies.jpg";

const Programs = () => {
  return (
    <>
      <div className="programs">
        <div className="program">
          <img src={program_1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Artisan</p>
          </div>
        </div>
        <div className="program">
          <img src={program_2} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Certificate</p>
          </div>
        </div>
        <div className="program">
          <img src={program_3} alt="" />
          <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Diploma</p>
          </div>
        </div>
      </div>
      <div className="programs-images">
        <img src={school_bronchur_1} alt="" className="bronchure-1" />
        <img src={school_bronchur_2} alt="" className="bronchure-2" />
      </div>
      <div className="exam-image">
        <img src={exam_bodies} alt="" />
      </div>
    </>
  );
};

export default Programs;
