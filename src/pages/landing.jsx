import React from "react";
import {
  container,
  leftColumn,
  heroSvg,
  chevronIcon,
  callToAction,
} from "../styles/landing.module.scss";
import { FaChevronRight } from "react-icons/fa";
import HeroSectionSvg from "../components/hero-section-svg";

function Landing() {
  return (
    <section className={container}>
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
      <HeroSectionSvg heroSvg={heroSvg} />
    </section>
  );
}

export default Landing;
