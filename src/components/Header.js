import React, { useState } from "react";
import "../css/Header.css";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";
import { motion, useCycle, useScroll } from "framer-motion";

const Header = () => {
  const [shadow, setShadow] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [animation, cycleAnimation] = useCycle("hidden", "visible");
  const { scrollYProgress } = useScroll();

  const iwidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", iwidth);

  let toggle;

  if (width < 991) {
    toggle = () => cycleAnimation();
  }

  const navShadow = () => {
    if (window.scrollY > 60) {
      setShadow("scroll");
    } else {
      setShadow("");
    }
  };
  window.onscroll = navShadow;

  // for animation

  const logoVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 6 },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 130,
      },
    },
  };

  const socialLinkVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: "tween" } },
  };

  const navbarNavVariants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        staggerDirection: -1,
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <header className={shadow}>
      <nav id="navbar">
        <div className="container">
          <motion.div
            className="logo"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="/">
              <img src={logo} alt="Nody" />
            </a>
          </motion.div>

          <motion.div
            className="navbar-nav"
            variants={navbarNavVariants}
            initial="hidden"
            animate={width > 991 ? "visible" : animation}
          >
            <ul variants={linkVariants}>
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={linkVariants}>
                  <a href={`${link.link}`} onClick={toggle}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="social-area" variants={linkVariants}>
              <motion.i
                className="fa-brands fa-facebook-f"
                variants={socialLinkVariants}
              ></motion.i>
              <motion.i
                className="fa-brands fa-instagram"
                variants={socialLinkVariants}
              ></motion.i>
              <motion.i
                className="fa-brands fa-twitter"
                variants={socialLinkVariants}
              ></motion.i>
              <motion.i
                className="fa-brands fa-linkedin-in"
                variants={socialLinkVariants}
              ></motion.i>
            </div>
          </motion.div>
          <div className="menu" onClick={toggle}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          backgroundColor: "#3956DE",
          height: "5px",
          transformOrigin: 0,
        }}
      />
    </header>
  );
};

export default Header;
