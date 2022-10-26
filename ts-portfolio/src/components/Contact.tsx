import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
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
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (): void => {
    if (null !== form.current) {
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
    }
  };

  /* validations */
  const required = (value: string) => (value ? undefined : "*required");
  const validateEmail = (value: string) =>
    value! &&
    value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
    )
      ? undefined
      : "*incorrect email address";

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
          sendEmail();
        }}
      >
        {({ handleSubmit, values, valid }) => (
          <form ref={form} onSubmit={handleSubmit} className="contact-right">
            <h1>Get In Touch</h1>
            <h2>
              <SiMinutemailer /> gergely.gimesi@gmail.com
            </h2>
            <div className="contact-right-name">
              <Field validate={required} name="firstname">
                {({ input, meta }) => (
                  <>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...input}
                    ></input>
                    {meta.touched && meta.error && (
                      <span className="error-message">{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
            </div>
            <div className="contact-right-name">
              <Field validate={required} name="lastname">
                {({ input, meta }) => (
                  <>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...input}
                    ></input>
                    {meta.touched && meta.error && (
                      <span className="error-message">{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
            </div>
            <div className="contact-right-email-phone">
              <Field validate={validateEmail} name="email">
                {({ input, meta }) => (
                  <>
                    <input type="text" placeholder="Email" {...input}></input>
                    {meta.touched && meta.error && (
                      <span className="error-message">{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
            </div>
            <div className="contact-right-email-phone">
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
