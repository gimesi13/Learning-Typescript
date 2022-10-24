import React, { useState } from "react";
import thinker from "../Pictures/undraw_code_thinking_re_gka2.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "./Project";
//data
import projectsdata from "../data/projects.json";

export const Projects: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = ["tab1", "tab2", "tab3"];

  const projects: {
    name: string;
    description: string;
    tech: string;
    link: string;
    thumbnail: string;
    github: string;
  }[] = projectsdata;

  /* ANIMATION VARIANTS */
  const animateTab = {
    inactive: {
      clipPath: "circle(0% at 50% 50%)",
      transition: { duration: 0.5 },
    },
    active: {
      clipPath: "circle(70.7% at 50% 50%)",
      transition: { duration: 0.5 },
    },
  };

  const animateGrid = {
    hidden: { x: "100%", display: "none" },
    show: { x: 0, display: "grid" },
  };

  const animatedElement = {
    offscreen: { opacity: 0, transition: { duration: 0.6 } },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="banner projects">
      <div className="wrapper"></div>
      <div className="navlink" id="projects" />

      <h1>Projects</h1>
      <p>
        Building real, functioning applications plays a major role in my
        learning process. Some I made to help small Businesses, some just for
        fun. Check them out:
      </p>
      <div className="tabs">
        {tabs.map((tab) => {
          return (
            <motion.div
              className="tab"
              key={tab}
              initial={false}
              animate={activeTab === tab ? "active" : "inactive"}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
              <motion.div
                className="tab-background"
                variants={animateTab}
              ></motion.div>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div
          className="projects-grig tab-1"
          variants={animateGrid}
          initial={false}
          animate={activeTab === "tab1" ? "show" : "hidden"}
        >
          {projects.map((project, i) => {
            return (
              <motion.div
                key={i}
                variants={animatedElement}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ amount: 0.3 }}
              >
                <Project project={project} />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="projects-grig tab-2"
          variants={animateGrid}
          initial={false}
          animate={activeTab === "tab2" ? "show" : "hidden"}
        >
          <div className="thinker">
            <img className="thinker-svg" src={thinker} alt="thinker" />
          </div>
          <p>More projects coming soon... 😊</p>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="projects-grig tab-3"
        variants={animateGrid}
        initial={false}
        animate={activeTab === "tab3" ? "show" : "hidden"}
      >
        <div className="thinker">
          <img className="thinker-svg" src={thinker} alt="thinker" />
        </div>
        <p>No more projects to show...</p>
      </motion.div>
    </section>
  );
};
