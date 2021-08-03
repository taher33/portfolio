import React from "react";
import emailjs from "emailjs-com";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  bg,
  container,
  rightColumn,
  flex,
  icons,
} from "../styles/contact.module.scss";

function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ycwrfig",
        "template_uj3jd4o",
        e.target,
        "user_Od9ld9qevU1RmpDe2IuPU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className={bg}>
      <div className={container}>
        <h2>Contact Me</h2>
        <div className={flex}>
          <form onSubmit={sendEmail}>
            <label htmlFor="name"> name</label>
            <input type="text" name="name" />
            <label htmlFor="email"> Email</label>
            <input type="text" name="email" />
            <label htmlFor="message"> message</label>
            <textarea name="message" id="" cols="20" rows="10"></textarea>
            <button type="submit">send message</button>
          </form>
          <div className={rightColumn}>
            <p>Hi , let’s talk about improving or creating a website for you</p>
            <div>
              <AiFillPhone />
              <span>0666962795</span>
            </div>
            <div>
              <MdEmail />
              <span>taherhehe@gmail.com</span>
            </div>
            <div className={icons}>
              <a
                href="https://www.instagram.com/taher_latreche/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100007763866775"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://twitter.com/LatrecheTaher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/latreche-taher-000504208/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
