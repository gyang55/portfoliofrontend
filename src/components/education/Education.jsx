import React, { useState, useEffect } from "react";
import School from "./school/School";
import "./Education.css";
const Education = () => {
  const [schools, setSchools] = useState();
  const urlAboutMe = "https://guangyangportfolio.herokuapp.com/school";
  useEffect(() => {
    const fetchAPI = async () => {
      const jsonData = await fetch(urlAboutMe);
      const data = await jsonData.json();
      setSchools(data);
    };
    fetchAPI();
  }, []);
  return (
    <section id="services">
      {/* <h5>What I Offer</h5> */}
      <h2>Education</h2>

      <div className="container services__container">
        {schools &&
          schools.map((school) => {
            return (
              <School
                key={school.schoolName}
                name={school.schoolName}
                major={school.major}
                time={school.time}
                degree={school.degree}
                courses={school.courses}
              />
            );
          })}
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Education;
