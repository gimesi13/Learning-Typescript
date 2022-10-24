import React, { useRef } from "react";
import { motion } from "framer-motion";
//import emailjs from "emailjs-com";
import inbox from "../Pictures/undraw_envelope_re_f5j4.svg";
import { SiMinutemailer } from "react-icons/si";
import { Form, Field } from "react-final-form";

/* variants */
const animatedElement = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    transition: { type: "spring", bounce: 0.5, duration: 1 },
    opacity: 1,
  },
};

export const Contact: React.FC = (): JSX.Element => {
  /* emailjs code*/
  /*   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0zsakn",
        "template_l8p28wx",
        form.current,
        "g4PHWosCI3QMWwFrf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }; */

  return (
    <section className="banner contact">
      <div className="wrapper"></div>
      <div className="navlink" id="contact" />

      <motion.div
        className="contact-left"
        variants={animatedElement}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img className="inbox-svg" src={inbox} alt="inbox" />
      </motion.div>
      <Form
        onSubmit={() => {
          alert("submitted");
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="contact-right">
            <h1>Get In Touch</h1>
            <h2>
              <SiMinutemailer /> gergely.gimesi@gmail.com
            </h2>
            <div className="contact-right-name">
              <label>First Name</label>
              <Field
                name="firstname"
                component="input"
                placeholder="first name"
              ></Field>
            </div>
            <div className="contact-right-name">
              <label>Last Name</label>
              <Field
                name="lastname"
                component="input"
                placeholder="last name"
              ></Field>
            </div>
            <div className="contact-right-email-phone">
              <Field name="email" component="input" placeholder="Email"></Field>
              <Field
                name="phone"
                component="input"
                placeholder="Phone No."
              ></Field>
            </div>
            <div className="contact-right-message">
              <Field
                name="message"
                component="textarea"
                placeholder="Message"
              ></Field>
            </div>
            <div className="contact-right-send">
              <button
                className="contact-right-send-input"
                type="submit"
                value="Send"
                /* whileHover={{ x: 10 }}
                whileTap={{ scale: 0.9 }} */
              >
                Send
              </button>
            </div>
          </form>
        )}
      </Form>
    </section>
  );
};
