import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

//icons
import { FiX } from "react-icons/fi";
import { BiHomeCircle, BiMessageDetail } from "react-icons/bi";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

import { container, sidebar, links, exit } from "../styles/sidebar.module.scss";

function SideBar({ show, setShow }) {
  return (
    <div onClick={() => setShow(false)} className={container}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { duration: 0.4, ease: "easeOut" } }}
        exit={{ x: "100%", transition: { duration: 0.3, ease: "easeOut" } }}
        onClick={(e) => e.stopPropagation()}
        className={sidebar}
      >
        <FiX onClick={() => setShow(false)} className={exit} />
        <div className={links}>
          <Link to="home" onClick={() => setShow(false)} smooth={true}>
            <span>
              <BiHomeCircle />
              home
            </span>
          </Link>
          <Link to="projects" onClick={() => setShow(false)} smooth={true}>
            <span>
              <AiOutlineProject />
              my work
            </span>
          </Link>
          <Link to="about" onClick={() => setShow(false)} smooth={true}>
            <span>
              <BsPersonLinesFill />
              about
            </span>
          </Link>
          <Link to="contact" onClick={() => setShow(false)} smooth={true}>
            <h4>
              <BiMessageDetail /> let's talk
            </h4>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default SideBar;
