import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Roland.jpg";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Guang Yang (Roland)</h1>
        <h5 className="text-light">Software Developer</h5>

        <CTA />

        <div className="me">
          {/* <img src={ME} alt="me" /> */}
          <img className="icon" src={ME} alt="" />
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
