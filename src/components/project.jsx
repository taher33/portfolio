import React from "react";
import {
  container,
  rectangle,
  linkIcon,
  title,
  footer,
  githubIcon,
} from "../styles/projects.module.scss";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
function Project({ name }) {
  return (
    <div className={container}>
      <div className={rectangle}>
        <div className={title}>
          <h1>Fashion store</h1>
          <HiOutlineExternalLink className={linkIcon} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          convallis pretium, in vitae amet amet. In enim faucibus a laoreet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          convallis pretium, in vitae amet amet. In enim faucibus a laoreet
        </p>
        <div className={footer}>
          <span>MongoDB</span>
          <span>Next js</span>
          <span>Node</span>
          <a href="https://github.com/taher33">
            <AiOutlineGithub className={githubIcon} />
          </a>
          <CgWebsite />
        </div>
      </div>
      <img src="./project-ecomerc.png" alt="project mockup" />
    </div>
  );
}

export default Project;
