import React from "react";
import Project from "../components/project";
import Zigzag from "../components/zigzag";
import { zigzag } from "../styles/projects.module.scss";
import { container } from "../styles/projectSection.module.scss";

function Projects() {
  const projects = ["1st", "2nd"];
  return (
    <div id="projects" className={container}>
      <h2>my work</h2>
      {projects.map((el, index) => (
        <>
          <Project key={index} name={el} />
          {index !== projects.length - 1 ? <Zigzag classN={zigzag} /> : null}
        </>
      ))}
    </div>
  );
}

export default Projects;
