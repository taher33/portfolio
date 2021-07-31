import React from "react";
import {
  container,
  leftColumn,
  heroSvg,
  chevronIcon,
  callToAction,
  blob,
} from "../styles/landing.module.scss";
import { FaChevronRight } from "react-icons/fa";
import HeroSvg from "../components/hero-section-svg";
import Blob from "../components/blob";

function Landing() {
  return (
    <section className={container}>
      <Blob classN={blob} />
      <div className={leftColumn}>
        <h1>give your clients the web experience they deserve</h1>
        <p>
          get awesome designs, fluid frontends and secure backends for a deacent
          price
        </p>
        <div className={callToAction}>
          <button>Hire me</button>
          <span>
            or see my work <FaChevronRight className={chevronIcon} />
          </span>
        </div>
      </div>
      <HeroSvg heroSvg={heroSvg} />
    </section>
  );
}

export default Landing;
