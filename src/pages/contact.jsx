import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  bg,
  container,
  rightColumn,
  flex,
} from "../styles/contact.module.scss";

function ContactMe() {
  return (
    <div className={bg}>
      <div className={container}>
        <h2>Contact Me</h2>
        <div className={flex}>
          <form>
            <label htmlFor="name"> name</label>
            <input type="text" name="name" />
            <label htmlFor="email"> Email</label>
            <input type="text" name="email" />
            <label htmlFor="message"> message</label>
            <textarea name="message" id="" cols="20" rows="10"></textarea>
            <button type="submit" onClick={(e) => e.preventDefault()}>
              send message
            </button>
          </form>
          <div className={rightColumn}>
            <p>
              Hi , let’s talk about improving your website or create a new one
            </p>
            <div>
              <AiFillPhone />
              <span>0666962795</span>
            </div>
            <div>
              <MdEmail />
              <span>taherhehe@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
