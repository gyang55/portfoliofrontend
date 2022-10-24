import React from "react";
import "./portfolio.css";
import { projects } from "./projects";

import { Icon } from "@iconify/react";

// DO NOT USE THE IMAGES IN PRODUCTION

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ vid, id, intro, title, github, techStack }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <iframe src={vid} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{intro}</h5>
              {techStack.map((icon) => {
                return <Icon key={icon} icon={icon} />;
              })}
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
