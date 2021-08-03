import React, { useEffect, useRef } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  AOS.init();
  const ref = useRef(null);
  const image = useRef(null);

  return (
    <div ref={ref} className={container}>
      <div className={rectangle}>
        <div className={title}>
          <h1 data-aos="fade-up">Fashion store</h1>
          <HiOutlineExternalLink data-aos="fade-up" className={linkIcon} />
        </div>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          convallis pretium, in vitae amet amet. In enim faucibus a laoreet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          convallis pretium, in vitae amet amet. In enim faucibus a laoreet
        </p>
        <div className={footer} data-aos="fade-up">
          <span>MongoDB</span>
          <span>Next js</span>
          <span>Node</span>
          <a href="https://github.com/taher33">
            <AiOutlineGithub className={githubIcon} />
          </a>
          <CgWebsite />
        </div>
      </div>
      <img
        ref={image}
        src="./project-ecomerc.png"
        data-aos="zoom-in"
        data-aos-duration="3000"
        alt="project mockup"
      />
    </div>
  );
}

export default Project;
