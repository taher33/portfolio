import React from "react";
import Project from "../components/project";
import Zigzag from "../components/zigzag";
import { zigzag } from "../styles/projects.module.scss";
import { container } from "../styles/projectSection.module.scss";

function Projects() {
  const projects = [
    {
      url: "https://fashion-ecommerce-lime.vercel.app/",
      title: "clothing online shop",
      description:
        "arachi brands is an online store which has a wide range of products womens wear, men's wear and kids wear. created with the latest technologies next js, sass, redux for the frontend and express, mongodb for the backend",
      tech: ["next js", "redux", "express", "mongodb"],
      github: "https://github.com/taher33/ecommerc",
      img: "./project-ecomerc.png",
      alt: "image of website",
    },
    {
      url: "https://chat-app-latrehe.vercel.app/",
      title: "legate",
      description:
        "Legate is a messaging platform for companies and individuals. It's fast, safe and available everywhere created with the latest technologies next js, sass for the frontend and socketIO, mongodb for the backend",
      tech: ["next js", "framer motion", "socketIO", "mongodb"],
      github: "https://github.com/taher33/chat-app",
      img: "legate.png",
      alt: "image of website",
    },
  ];
  return (
    <div id="projects" className={container}>
      <h2>my work</h2>
      {projects.map((el, index) => (
        <>
          <Project key={index} data={el} />
          {index !== projects.length - 1 ? <Zigzag classN={zigzag} /> : null}
        </>
      ))}
    </div>
  );
}

export default Projects;
