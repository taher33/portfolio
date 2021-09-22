import React from "react";
import AboutmeSvg from "../components/aboutmeSvg";
import { container, leftColumn, svg } from "../styles/about.module.scss";

function About() {
  return (
    <div id="about" className={container}>
      <div className={leftColumn}>
        <h2>about me</h2>
        <p>
          Expertise in React js, Server side nodejs. A great follower of good
          coding practice. Presently working with mern stack. Has done some
          great frontend work next.js. A Flexible Developer who can work on
          different stacks, but his passion lies in React. Lives in Algeria and
          my hobies are playing chess doing sports
        </p>
      </div>
      <AboutmeSvg classN={svg} />
    </div>
  );
}

export default About;
