import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/navBar.scss";

function NavBar() {
  return (
    <div className="container">
      <div className="leftSideNav">
        <span>about</span>
        <span>my work</span>
      </div>
      <h2 className="logo">Latreche</h2>
      <h4>Get in touch</h4>
      <GiHamburgerMenu className="hamburger" />
    </div>
  );
}

export default NavBar;
