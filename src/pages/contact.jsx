import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Dialog from "../components/Dialog";
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
import Loader from "../components/Loader";

function ContactMe() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ycwrfig",
        "template_uj3jd4o",
        e.target,
        "user_Od9ld9qevU1RmpDe2IuPU"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setFailure(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className={bg}>
      <div id="contact" className={container}>
        <h2>Contact Me</h2>
        <div className={flex}>
          <form onSubmit={sendEmail}>
            <label htmlFor="name"> name</label>
            <input type="text" name="name" />
            <label htmlFor="email"> Email</label>
            <input type="text" name="email" />
            <label htmlFor="message"> message</label>
            <textarea name="message" id="" cols="20" rows="10"></textarea>
            {loading ? <Loader /> : <button type="submit">send message</button>}
            <AnimatePresence>
              {success && (
                <Dialog
                  show={success}
                  setShow={setSuccess}
                  content="your message was sent successfuly"
                />
              )}
              {failure && (
                <Dialog
                  show={failure}
                  setShow={setFailure}
                  content="sorry but something went wrong, try and contact me using my email"
                />
              )}
            </AnimatePresence>
          </form>
          <div className={rightColumn}>
            <p>
              Let’s start working on your new or existing business websites
              today!
            </p>
            <div>
              <AiFillPhone />
              <span>+213553545114</span>
            </div>
            <div>
              <MdEmail />
              <span>latrechemedtaher@gmail.com</span>
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
