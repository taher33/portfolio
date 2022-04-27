import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { AnimatePresence } from "framer-motion";

import SideBar from "./sideBar";

import {
  container,
  rigthSideNav,
  logo,
  hamburger,
} from "../styles/navBar.module.scss";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={container}>
      <h2 className={logo}>Latreche Taher</h2>
      <div className={rigthSideNav}>
        <Link to="home" smooth={true}>
          <span>home</span>
        </Link>
        <Link to="about" smooth={true}>
          <span>about</span>
        </Link>
        <Link to="projects" smooth={true}>
          <span>my work</span>
        </Link>
        <Link to="contact" smooth={true}>
          <h4>let's talk</h4>
        </Link>
      </div>

      <RiMenu3Fill onClick={() => setOpen(true)} className={hamburger} />
      <AnimatePresence>
        {open && <SideBar show={open} setShow={setOpen} />}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
