import React from "react";
import { Icon } from "@iconify/react";
import { BsPatchCheckFill } from "react-icons/bs";
export default function Article(props) {
  const { icon, tech, level } = props;
  return (
    <article className="experience__details">
      {icon && icon === "general" ? (
        <BsPatchCheckFill className="experience__details-icon" />
      ) : (
        <Icon className="experience__details-icon" icon={icon} />
      )}
      <div>
        <h4>{tech}</h4>
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
}
