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
import HeroSvg from "../components/hero-section-svg";

//variants framer-mo
const item = {
  initial: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function Landing() {
  return (
    <motion.section id="home" className={container}>
      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.3 } } }}
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
            <motion.button>my work</motion.button>
          </Link>
          <span>
            ...or just get in contact <FaChevronRight className={chevronIcon} />
          </span>
        </motion.div>
      </motion.div>

      <HeroSvg heroSvg={heroSvg} />
    </motion.section>
  );
}

export default Landing;
