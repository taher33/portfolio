import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  container,
  leftColumn,
  heroSvg,
  chevronIcon,
  callToAction,
} from "../styles/landing.module.scss";
import { FaChevronRight } from "react-icons/fa";

//variants framer-mo
const item = {
  initial: {
    opacity: 0,
    y: 40,
    transform: "translate3d(0,100%,0)",
    clipPath: "polygon(0 0, 100% 0, 100% 11%, 0 11%)",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeInOut", duration: 1 },
    transform: "translate(0px,0)",
    clipPath: "polygon(-100% 0, 100% 0, 150% 100%, 0 100%)",
  },
};

function Landing() {
  return (
    <motion.section id="home" className={container}>
      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.6 } } }}
        initial="initial"
        animate="show"
        className={leftColumn}
      >
        <motion.h1 variants={item}>
          give your clients the web experience they deserve
        </motion.h1>
        <motion.p variants={item}>
          get awesome designs, fluid frontends and secure backends for a deacent
          price
        </motion.p>
        <motion.div variants={item} className={callToAction}>
          <Link to="projects" smooth={true}>
            <motion.button
              whileHover={{ scale: 1.2, transition: { ease: "backInOut" } }}
            >
              see my work
            </motion.button>
          </Link>
          <span>
            ...or just get in contact <FaChevronRight className={chevronIcon} />
          </span>
        </motion.div>
      </motion.div>

      <motion.img
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7 },
        }}
        className={heroSvg}
        src="/heroImg.png"
        alt="ullistration"
      />
    </motion.section>
  );
}

export default Landing;
