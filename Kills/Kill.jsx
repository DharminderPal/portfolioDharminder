import React from "react";
import "./style.css";
import { DiMongodb, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiFirebase } from "react-icons/di";
import { SiJavascript, SiNpm, SiCplusplus,SiFirebase  } from "react-icons/si";

import image from "../image/1.png";

const Skill = () => {
  return (
    <div   id="skill-section"  className="skill-wrapper">
      <div className="skill-left">
        <img src={image} alt="skill" />
      </div>
      <div className="skill-right">
         <h1 >What I do</h1> <br />
        <h3 >CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h3>
        <h6>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications <br />

⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks <br />

⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</h6>
        <div className="skills-icons">
  <div className="skill-icon">
    <DiHtml5 />
    <span>HTML</span>
  </div>

  <div className="skill-icon">
    <DiCss3 />
    <span>CSS</span>
  </div>

  <div className="skill-icon">
    <SiJavascript />
    <span>JavaScript</span>
  </div>

  <div className="skill-icon">
    <DiReact />
    <span>React</span>
  </div>

  <div className="skill-icon">
    <SiCplusplus />
    <span>C++</span>
  </div>

  <div className="skill-icon">
    <DiMongodb />
    <span>MongoDB</span>
  </div>

  <div className="skill-icon">
    <SiNpm />
    <span>NPM</span>
  </div>



  <div className="skill-icon">
    <SiFirebase  />
    <span>FireBase</span>
  </div>

</div>

        <section>

<h1>Education</h1>
<h2>Gulzar Group oF Institute</h2>
<h5>

B.Tech in Computer Science Eng.

</h5>
August 2020 - April 2024 <br />
CGPA 7.0
        </section>
      
      </div>
    </div>
  );
};

export default Skill;
