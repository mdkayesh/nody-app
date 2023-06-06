import React from "react";
import { logo2 } from "../assets/img";
import "../css/Footer.css";
import { footerLinks } from "../constants";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 120,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      // delayChildren: 5,
    },
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
  },
};

const Footer = () => (
  <footer>
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="row">
        <div className="col-lg-5">
          <motion.div className="logo-area" variants={fadeUp}>
            <motion.div className="logo" variants={fadeLeft}>
              <a href="/">
                <img src={logo2} alt="Nody" />
              </a>
            </motion.div>
            <p>
              Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum
              ante ipsum primis in faucibus ultrices posuere cubilia.
            </p>
            <a href="/">
              <i className="fa-brands fa-instagram"></i>Join Us In Instagram
            </a>
          </motion.div>
        </div>
        <div className="col-lg-7 pt-3 pt-lg-0">
          <div className="row">
            <motion.div className="col-md-4" variants={fadeUp}>
              <div className="customer">
                <h4 className="f-22 text-white py-4">Customer</h4>
                <ul>
                  {footerLinks.map((item) =>
                    item.customer.map((item, index) => (
                      <motion.li key={index} variants={linkVariants}>
                        <a href="/">{item.link}</a>
                      </motion.li>
                    ))
                  )}
                </ul>
              </div>
            </motion.div>
            <motion.div className="col-md-4" variants={fadeUp}>
              <div className="product">
                <h4 className="f-22 text-white py-4">Product</h4>
                <ul>
                  {footerLinks.map((item) =>
                    item.product.map((item, index) => (
                      <motion.li key={index} variants={linkVariants}>
                        <a href="/">{item.link}</a>
                      </motion.li>
                    ))
                  )}
                </ul>
              </div>
            </motion.div>
            <motion.div className="col-md-4" variants={fadeUp}>
              <div className="Learn-More">
                <h4 className="f-22 text-white py-4">Learn More</h4>
                <ul>
                  {footerLinks.map((item) =>
                    item.learnMore.map((item, index) => (
                      <motion.li key={index} variants={linkVariants}>
                        <a href="/">{item.link}</a>
                      </motion.li>
                    ))
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </footer>
);
export default Footer;
