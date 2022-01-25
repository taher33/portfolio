import React from "react";
import {
  container,
  rectangle,
  title,
  footer,
  githubIcon,
  linkToSite,
} from "../styles/projects.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";

function Project({ data }) {
  AOS.init();

  return (
    <div className={container}>
      <div className={rectangle}>
        <div className={title}>
          <h1 data-aos="fade-up">{data.title}</h1>
        </div>
        <p data-aos="fade-up">{data.description} </p>
        <div className={footer} data-aos="fade-up">
          {data.tech.map((el) => (
            <span>{el}</span>
          ))}
          <a href={data.github} target="_blank" rel="noreferrer">
            <AiOutlineGithub className={githubIcon} />
          </a>

          <a href={data.url} target="_blank" rel="noreferrer">
            <CgWebsite />
          </a>
        </div>
      </div>
      <a
        className={linkToSite}
        target="_blank"
        rel="noreferrer"
        href={data.url}
      >
        <img
          src={data.img}
          data-aos="zoom-in"
          data-aos-duration="3000"
          alt={data.alt}
        />
      </a>
    </div>
  );
}

export default Project;
