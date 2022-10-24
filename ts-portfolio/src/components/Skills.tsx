import { motion } from "framer-motion";
import { Slider } from "./Slider";
import {
  SiCss3,
  SiSass,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiFramer,
  SiJquery,
  SiTailwindcss,
} from "react-icons/si";

//images array for slider
const images: { img: JSX.Element; name: string }[] = [
  { img: <SiReact />, name: "React.js" },
  { img: <SiJavascript />, name: "Javascript" },
  { img: <SiCss3 />, name: "CSS3" },
  { img: <SiSass />, name: "Sass" },
  { img: <SiTailwindcss />, name: "Tailwind CSS" },
  { img: <SiHtml5 />, name: "HTML5" },
  { img: <SiFramer />, name: "Framer Motion" },
  { img: <SiJquery />, name: "Jquery" },
];

//breakpoints for the carousel slider
const breakPoints: { width: number; itemsToShow: number }[] = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 400,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
  },
  {
    width: 992,
    itemsToShow: 4,
  },
  {
    width: 1200,
    itemsToShow: 5,
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="banner skills-section">
      <div className="wrapper"></div>
      <div className="navlink navlink-t2" id="skills" />
      <motion.div
        initial={{
          y: -90,
        }}
        className="skills"
      >
        <h1>Skills</h1>
        <p>
          Developing my skills is very important to me. Fortunately, I enjoy the
          process and there is always sooooo much to learn in Web Development...
          Here some technologies I'm already familiar with:
        </p>
        <Slider images={images} breakPoints={breakPoints} />
      </motion.div>
    </section>
  );
};
