import React from "react";
import CV from "../../assets/Resume_RolandYang.pdf";
import CoverLetter from "../../assets/cover_letterdocx.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href={CoverLetter} download className="btn">
        Download CoverLetter
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
