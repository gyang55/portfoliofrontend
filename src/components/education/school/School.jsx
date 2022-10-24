import React from "react";
import Course from "./Course";

export default function School(props) {
  const { name, degree, major, time, courses } = props;
  return (
    <article className="service">
      <div className="service__head">
        <h3>{name}</h3>
        <h5>{degree}</h5>
        <h6>{major}</h6>
        <h6>{time}</h6>
      </div>
      <Course courses={courses} />
    </article>
  );
}
