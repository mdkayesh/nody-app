import React from "react";
import "../css/Header.css";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Navbar2 = ({
  navbarNavVariants,
  linkVariants,
  socialLinkVariants,
  toggle,
  show,
  width,
}) => {
  return (
    <motion.div
      className="navbar-nav"
      variants={navbarNavVariants}
      animate={width > 991 ? "visible" : show ? "visible" : "hidden"}
    >
      <ul variants={linkVariants}>
        {navLinks.map((link, index) => (
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
  );
};

export default Navbar2;
