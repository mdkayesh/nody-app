import React from "react";
import "../css/Hero.css";
import hero from "../assets/hero-img.png";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const hVariants = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const fadeUp = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 120,
      damping: 10,
      type: "spring",
    },
  },
};

const btnVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  hover: {
    color: "white",
    translateY: "-5px",
    boxShadow: "0 4px 20px rgb(57 86 222 0.5)",
  },
};

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <motion.div
            className="hero-content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="display-4 mb-2 fw-semibold"
              variants={hVariants}
            >
              Hello,
            </motion.h1>
            <motion.h1 className="display-5 fw-normal" variants={fadeUp}>
              We Help You To Boost Your Business
            </motion.h1>
            <p className="py-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              sequinesciunt.
            </p>
            <motion.a
              href="/"
              className="button"
              variants={btnVariants}
              whileHover="hover"
            >
              Get Started <i className="fa fa-arrow-right"></i>
            </motion.a>
          </motion.div>
        </div>
        <div className="col-lg-6 pt-3 pt-lg-0">
          <motion.div
            className="img"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <img src={hero} alt="hero" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
