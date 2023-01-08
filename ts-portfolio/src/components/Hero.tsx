import { motion } from "framer-motion";
import programmer from "../Pictures/undraw_feeling_proud_qne1.svg";
import { BsArrowRightCircle } from "react-icons/bs";
import Typed from "react-typed";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  name: Person;
  age: number;
  children?: React.ReactNode;
}

export const Hero: React.FC<Props> = ({ name, age }) => {
  /*VARIANTS (animations)*/
  const animatedElement = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      transition: { type: "spring", bounce: 0.5, duration: 1 },
      opacity: 1,
    },
  };
  const animatedText = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: { opacity: 1, x: 0 },
  };
  /* VARIANTS (animations) END */

  return (
    <section className="banner home-section" id="home">
      <div className="wrapper"></div>
      <motion.div
        className="home-left"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
      >
        <motion.div
          className="home-left-welcome-wrapper"
          variants={animatedText}
        >
          <div className="home-left-welcome">Welcome to my Portfolio</div>
        </motion.div>

        <motion.h1 variants={animatedText}>Hi! I'm {name.firstName}!</motion.h1>
        <motion.p variants={animatedText}>
          I'm a {age} years old Fronted Developer and I build web applications
          using
          <Typed
            className="typed"
            strings={[" React.", " TypeScript."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <br></br>
          Right now, I'm practicing TypeScript, this application is meant to
          demonstrate some basic features of typescript implemented on a React
          Application.
          <br></br>
          <span>
            Click
            <a
              className="source-code"
              href="https://github.com/gimesi13/Learning-Typescript/tree/main/ts-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            for source code.
          </span>
          <br></br>
          If you like my work, or you have anything to share with me about it.
          Don't hesitate to contact me!
        </motion.p>
        <motion.a href="#contact" variants={animatedText}>
          <motion.div
            className="home-left-connect"
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            Lets Connect <BsArrowRightCircle className="right-arrow-svg" />
          </motion.div>
        </motion.a>
      </motion.div>
      <motion.div
        className="home-right"
        variants={animatedElement}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.img
          animate={{ y: [10, -10] }}
          transition={{ yoyo: Infinity, duration: 3 }}
          className="programmer-svg"
          src={programmer}
          alt="programmer"
        />
      </motion.div>
    </section>
  );
};
