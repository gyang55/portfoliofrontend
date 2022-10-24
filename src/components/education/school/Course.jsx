import React, { Fragment } from "react";
import { BiCheck } from "react-icons/bi";

export default function Course(props) {
  const { courses } = props;

  return (
    <ul className="service__list  ">
      {/* <li>
        <BiCheck className="service__list-icon" />
        <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
      </li> */}
      <h4>Core Courses</h4>{" "}
      {courses.map((course) => {
        return (
          <li key={course}>
            <BiCheck className="service__list-icon" />
            <p>{course}</p>
          </li>
        );
      })}
    </ul>
  );
}
