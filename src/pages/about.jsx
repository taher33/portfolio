import React from "react";
import AboutmeSvg from "../components/aboutmeSvg";
import { container, leftColumn, svg } from "../styles/about.module.scss";

function About() {
  return (
    <div id="about" className={container}>
      <div className={leftColumn}>
        <h2>about me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
          tincidunt maecenas vivamus felis lorem adipiscing sed egestas.
          Venenatis diam velit faucibus faucibus. Enim eleifend massa, mauris ut
          non ac. Ac in arcu odio amet, cursus pretium sed
        </p>
      </div>
      <AboutmeSvg classN={svg} />
    </div>
  );
}

export default About;
