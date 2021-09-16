import React from "react";

import { container, sidebar } from "../styles/sidebar.module.scss";

function SideBar({ show, setShow }) {
  return (
    <div onClick={() => setShow(false)} className={container}>
      <div onClick={(e) => e.stopPropagation()} className={sidebar}>
        <span>home</span>
        <span>my work</span>
        <span>about</span>
        <h4> let's talk</h4>
      </div>
    </div>
  );
}

export default SideBar;
