import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Guang Yang (Roland)</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />

        <div className="me">
          {/* <img src={ME} alt="me" /> */}
          <img
            className="icon"
            src="https://media-exp1.licdn.com/dms/image/D5635AQHULaK7t4nr0A/profile-framedphoto-shrink_200_200/0/1666125332768?e=1667170800&v=beta&t=EacODgtCtxp1kvFP1D3fBxcW_YDrw64QaOBPjnlHScc"
            alt=""
          />
        </div>
        <HeaderSocial />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
