import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  container,
  rigthSideNav,
  logo,
  hamburger,
} from "../styles/navBar.module.scss";

function NavBar() {
  return (
    <div className={container}>
      <h2 className={logo}>Latreche</h2>
      <div className={rigthSideNav}>
        <span>home</span>
        <span>about</span>
        <span>my work</span>
        <h4>let's talk</h4>
      </div>
      <GiHamburgerMenu className={hamburger} />
    </div>
  );
}

export default NavBar;
