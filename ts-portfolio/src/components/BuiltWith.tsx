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

export const BuiltWith: React.FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{
        y: -90,
      }}
      className="footer-build-box"
    >
      <h1>This Website has been built with:</h1>
      <Slider images={images} breakPoints={breakPoints} />
    </motion.div>
  );
};
