import React from "react";
import { container, skills, icon } from "../styles/skills.module.scss";
import {
  DiJavascript1,
  DiMongodb,
  DiReact,
  DiSass,
  DiGit,
} from "react-icons/di";
import { SiRedux, SiNextDotJs, SiPostgresql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

function Skills() {
  return (
    <div className={container}>
      <h2>Skills</h2>
      <div className={skills}>
        <div>
          <FaNode className={icon} />
          <span>node js</span>
        </div>
        <div>
          <DiJavascript1 className={icon} />
          <span>java script</span>
        </div>
        <div>
          <DiReact className={icon} />
          <span>react js</span>
        </div>
        <div>
          <SiNextDotJs className={icon} />
          <span>next js</span>
        </div>
        <div>
          <DiSass className={icon} />
          <span>sass</span>
        </div>
        <div>
          <DiMongodb className={icon} />
          <span>mongo DB</span>
        </div>
        <div>
          <SiPostgresql className={icon} />
          <span>postgresql</span>
        </div>
        <div>
          <FiFigma className={icon} />
          <span>figma</span>
        </div>
        <div>
          <SiRedux className={icon} />
          <span>redux</span>
        </div>
        <div>
          <DiGit className={icon} />
          <span>git</span>
        </div>
      </div>
      <h3>and still learning more</h3>
    </div>
  );
}

export default Skills;
