import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/Roland.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const [aboutme, setAboutme] = useState();

  const urlAboutMe = "https://guangyangportfolio.herokuapp.com/aboutme";
  useEffect(() => {
    const fetchAPI = async () => {
      const jsonData = await fetch(urlAboutMe);
      const data = await jsonData.json();
      setAboutme(data);
    };
    fetchAPI();
  }, []);

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              {aboutme && <small>{aboutme.experiences}</small>}
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              {aboutme && <small>{aboutme.clients}</small>}
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {aboutme && <small>{aboutme.projects}</small>}
            </article>
          </div>

          {aboutme && <p>{aboutme.intro[0]}</p>}
          {aboutme && <p>{aboutme.intro[1]}</p>}

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
