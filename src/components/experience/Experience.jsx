import React, { useState, useEffect } from "react";
import "./experience.css";

import Article from "./experienceArticle/Article";
const Experience = () => {
  const [skills, setSkills] = useState();
  const urlAboutMe = "https://guangyangportfolio.herokuapp.com/skills";
  useEffect(() => {
    const fetchAPI = async () => {
      const jsonData = await fetch(urlAboutMe);
      const data = await jsonData.json();
      setSkills(data);
    };
    fetchAPI();
  }, []);
  return (
    <section id="experience">
      <h2>Skills I have</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Comfortable</h3>
          <div className="experience__content">
            {skills &&
              skills["comfortables"].map((article) => {
                return (
                  <Article
                    key={article.key}
                    icon={article.icon}
                    level={article.level}
                    tech={article.name}
                  />
                );
              })}
          </div>
        </div>
        {/* END OF Comfortables */}

        <div className="experience__backend">
          <h3>Decent</h3>
          <div className="experience__content">
            {skills &&
              skills["decent"].map((article) => {
                return (
                  <Article
                    key={article.key}
                    icon={article.icon}
                    level={article.level}
                    tech={article.name}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
