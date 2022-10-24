import React, { useState } from "react";
import { motion } from "framer-motion";
import OutsideClick from "detect-outside-click-react";
import { GoLogoGithub } from "react-icons/go";
import { HiCode } from "react-icons/hi";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    tech: string;
    link: string;
    thumbnail: string;
    github: string;
  };
}

export const Project: React.FC<ProjectProps> = ({ project }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /* ANIMATIONS VARIANTS */
  const animateWrapper = {
    hidden: {
      clipPath: "circle(0% at 50% -10%)",
    },
    show: {
      clipPath: "circle(132.7% at 94% 6%)",
      transition: { duration: 0.3, delayChildren: 0.25, staggerChildren: 0.18 },
    },
  };
  const animateText = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  /* ANIMATIONS VARIANTS END*/

  return (
    <OutsideClick
      close={() => {
        isOpen && setIsOpen(false);
      }}
    >
      <motion.div
        className="project"
        initial="hidden"
        onClick={() => {
          setIsOpen(true);
        }}
        onHoverStart={() => {
          setIsOpen(true);
        }}
        onHoverEnd={() => {
          setIsOpen(false);
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img className="project-thumbnail" src={project.thumbnail} alt="" />

        <motion.div
          className="project-wrapper"
          variants={animateWrapper}
          animate={isOpen ? "show" : "hidden"}
        >
          <motion.h1 variants={animateText}>{project.name}</motion.h1>
          <motion.p variants={animateText}>{project.description}</motion.p>
          <motion.div variants={animateText}>
            <motion.a
              className="live-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.9 }}
              whileHover={{ borderRadius: "2rem" }}
            >
              live link
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.9 }}
              className="live-code"
            >
              <GoLogoGithub />
              <HiCode />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </OutsideClick>
  );
};
