import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  Variants,
  AnimationControls,
} from "framer-motion";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg";
/* import hacker from "./Pictures/undraw_cloud_files_wmo8.svg";
 */

export const NavBar: React.FC = (): JSX.Element => {
  /* STATES */
  const [navbar, setNavbar] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  //AnimationControls
  const openMenu: AnimationControls = useAnimation();
  const closeMenu: AnimationControls = useAnimation();

  ///hamburger menu items///
  const menuItems: { text: string; href: string }[] = [
    { text: "Home", href: "#home" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  /* FUNCTIONS */
  const HandleMenuClick = (
    event: React.MouseEvent<
      HTMLLIElement | HTMLButtonElement | HTMLDivElement | HTMLAnchorElement,
      MouseEvent
    >
  ): void => {
    if (menuOpened) {
      openMenu.set({ scale: 0 });
      openMenu.start({ scale: 1 });
    } else {
      closeMenu.set({ scale: 0 });
      closeMenu.start({ scale: 1 });
    }
    setMenuOpened(!menuOpened);
  };

  // navbar on scroll behavior
  const handleNavBarScroll = (): void => {
    window.scrollY >= 1 ? setNavbar(true) : setNavbar(false);
  };
  useEffect(() => {
    navbar
      ? document.getElementById("navbar")!.classList.add("small")
      : document.getElementById("navbar")!.classList.remove("small");
  }, [navbar]);

  window.addEventListener("scroll", handleNavBarScroll, { passive: true });

  /* VARIANTS (animation) */
  //type variants
  const dropdownVariant: Variants = {
    hidden: {
      pointerEvents: "none",
      clipPath: "circle(0% at 100% 0%)",
      transition: { delay: 0.3, duration: 0.5, staggerChildren: 0.05 },
    },
    show: {
      pointerEvents: "auto",
      clipPath: "circle(132.7% at 94% 6%)",
      transition: { duration: 0.5, delayChildren: 0.25, staggerChildren: 0.18 },
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

  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-left">
        <a href="#home" className="navbar-left-logo">
          GG
        </a>
      </div>
      <div className="navbar-right">
        <ul className="routers">
          <motion.li whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
            <a href="#home">Home</a>
          </motion.li>
          <motion.li whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
            <a href="#projects">Projects</a>
          </motion.li>
        </ul>
        <div className="soc-icons">
          <a
            href="https://www.linkedin.com/in/gergely-gimesi-661639207/"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              <BsLinkedin className="social-icons linkedin" />
            </motion.div>
          </a>
          <a
            href="https://www.facebook.com/gergely.gimesi"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              <BsFacebook className="social-icons facebook" />
            </motion.div>
          </a>
          <a
            href="https://github.com/gimesi13/"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div whileHover={{ y: 6 }} whileTap={{ scale: 0.9 }}>
              <BsGithub className="social-icons github" />
            </motion.div>
          </a>
        </div>
        <a className="connect-button-box" href="#contact">
          <motion.div
            className="connect-button"
            whileHover={{ borderRadius: 50 }}
            whileTap={{ scale: 0.9 }}
          >
            Let's Connect
          </motion.div>
        </a>
      </div>

      <button className="hamburger-box" onClick={HandleMenuClick}>
        {menuOpened ? (
          <motion.div animate={openMenu}>
            <CgClose className="hamburger-icon hamburger-icon-close" />
          </motion.div>
        ) : (
          <motion.div animate={closeMenu}>
            <CgMenu className="hamburger-icon" />
          </motion.div>
        )}
      </button>

      <AnimatePresence>
        <motion.ul
          className="dropdown-menu"
          variants={dropdownVariant}
          initial={false}
          animate={menuOpened ? "show" : "hidden"}
        >
          {menuItems.map((item) => {
            return (
              <motion.li
                onClick={HandleMenuClick}
                key={item.href}
                whileTap={{ scale: 0.9 }}
                variants={animateText}
              >
                <a href={item.href}>{item.text}</a>
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
