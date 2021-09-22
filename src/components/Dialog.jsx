import React from "react";
import { motion } from "framer-motion";

//icons
import { FiX } from "react-icons/fi";

import { container, exit, dialog } from "../styles/dialog.module.scss";

function Dialog({ show, setShow, content }) {
  return (
    <div onClick={() => setShow(false)} className={container}>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
        exit={{ y: "100vh", transition: { duration: 0.3, ease: "easeOut" } }}
        onClick={(e) => e.stopPropagation()}
        className={dialog}
      >
        <span onClick={() => setShow(false)}>
          Close
          <FiX className={exit} />
        </span>
        <p>{content}</p>
      </motion.div>
    </div>
  );
}

export default Dialog;
