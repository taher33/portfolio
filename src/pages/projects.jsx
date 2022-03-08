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
        "Legate is a messaging platform for companies and individuals. git It's fast, safe and available everywhere created with the latest technologies next js, sass for the frontend",
      tech: ["next js", "sass", "socketIO", "mongodb"],
      github: "https://github.com/taher33/chat-app",
      img: "legate.png",
      alt: "image of website",
    },
    {
      url: "https://social-media-taher.vercel.app/",
      title: "Pacebook",
      description:
        "pacebook is a social media app that offers a new way to chat with friends, family and people nearby. Drawing inspiration from both facebook and twitter I made this web app using the MERN stack as my first real big project",
      tech: ["react", "node", "express", "mongodb"],
      github: "https://github.com/taher33/fashion-ecommerce-frontend",
      img: "socialapp2.png",
      alt: "image of website",
    },
    {
      url: "https://web-shop-seven.vercel.app/",
      title: "market place",
      description:
        "market place that allows its clients to either buy products or sell them by creating listings on the website and interacting with their clients or sellers using our built in chat",
      tech: ["react", "node", "express", "mongodb", "socketio"],
      github: "https://github.com/taher33/market-place-client",
      img: "marketPlace.png",
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
