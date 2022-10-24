import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
/* Icons */
import {
  BsLinkedin,
  BsFacebook,
  BsGithub,
  BsArrowUpCircleFill,
} from "react-icons/bs";
import { SiSass, SiReact, SiFramer } from "react-icons/si";
import { MdDraw } from "react-icons/md";
/* Components */
import { Slider } from "./Slider";

//images array
const images: { img: JSX.Element; name: string }[] = [
  { img: <SiReact />, name: "React.js" },
  { img: <SiSass />, name: "Sass" },
  { img: <SiFramer />, name: "Framer Motion" },
  {
    img: <MdDraw />,
    name: "unDraw",
  },
];

//breakpoints for the carousel slider
const breakPoints: { width: number; itemsToShow: number }[] = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 300,
    itemsToShow: 2,
  },
  {
    width: 500,
    itemsToShow: 3,
  },
  {
    width: 700,
    itemsToShow: 4,
  },
  {
    width: 900,
    itemsToShow: 5,
  },
];

export const Footer: React.FC = (): JSX.Element => {
  const [scrolltop, setScrollTop] = useState(false);

  // scrolltop arrow on scroll behavior
  const handleArrowScroll = (): void => {
    window.scrollY >= 1000
      ? !scrolltop && setScrollTop(true)
      : scrolltop && setScrollTop(false);
  };

  useEffect(() => {
    scrolltop
      ? document.getElementById("uparrow")!.classList.add("visible-svg")
      : document.getElementById("uparrow")!.classList.remove("visible-svg");
  }, [scrolltop]);

  window.addEventListener("scroll", handleArrowScroll, { passive: true });

  return (
    <section className="banner footer-section" id="footer">
      <div className="wrapper"></div>
      <motion.div
        initial={{
          y: -90,
        }}
        className="footer-build-box"
      >
        <h1>This Website has been built with:</h1>
        <Slider images={images} breakPoints={breakPoints} />
      </motion.div>

      <div className="footer-bottom-container">
        <div className="footer-bottom-left">
          <a href="#home">
            <BsArrowUpCircleFill id="uparrow" className="up-arrow-svg" />
          </a>
        </div>
        <div className="footer-bottom-right">
          <div className="soc-icons-footer">
            <a
              href="https://www.linkedin.com/in/gergely-gimesi-661639207/"
              target={"_blank"}
              rel="noreferrer"
            >
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}>
                <BsLinkedin className="social-icons linkedin" />
              </motion.div>
            </a>
            <a
              href="https://www.facebook.com/gergely.gimesi"
              target={"_blank"}
              rel="noreferrer"
            >
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}>
                <BsFacebook className="social-icons facebook" />
              </motion.div>
            </a>
            <a
              href="https://github.com/gimesi13/"
              target={"_blank"}
              rel="noreferrer"
            >
              <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }}>
                <BsGithub className="social-icons github" />
              </motion.div>
            </a>
          </div>
          <div>Created By Gergely Gimesi © 2022.</div>
        </div>
      </div>
    </section>
  );
};
