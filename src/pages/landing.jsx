import React, { useEffect, useRef } from "react";
import {
  container,
  leftColumn,
  heroSvg,
  chevronIcon,
  callToAction,
} from "../styles/landing.module.scss";
import { FaChevronRight } from "react-icons/fa";
import HeroSvg from "../components/hero-section-svg";
import gsap from "gsap";

function Landing() {
  const svg = useRef(null);
  const header = useRef(null);
  const paragraph = useRef(null);
  const buttons = useRef(null);
  useEffect(() => {
    gsap.from(header.current, {
      duration: 0.5,
      y: "100px",
      opacity: 0,
      ease: "power4.out",
    });
    gsap.from(svg.current, {
      duration: 0.7,
      y: "50px",
      opacity: 0,
      ease: "power4.out",
      delay: 0.3,
    });
    gsap.from(paragraph.current, {
      duration: 0.7,
      y: "50px",
      opacity: 0,
      ease: "power4.out",
      delay: 0.6,
    });
    gsap.from(buttons.current, {
      duration: 0.7,
      y: "50px",
      opacity: 0,
      ease: "power4.out",
      delay: 0.9,
    });
  }, []);
  return (
    <section className={container}>
      <div className={leftColumn}>
        <h1 ref={header}>give your clients the web experience they deserve</h1>
        <p ref={paragraph}>
          get awesome designs, fluid frontends and secure backends for a deacent
          price
        </p>
        <div ref={buttons} className={callToAction}>
          <button>Hire me</button>
          <span>
            or see my work <FaChevronRight className={chevronIcon} />
          </span>
        </div>
      </div>

      <HeroSvg refrence={svg} heroSvg={heroSvg} />
    </section>
  );
}

export default Landing;
