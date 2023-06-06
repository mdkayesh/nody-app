import React from "react";
import "../css/Project.css";
import { projectContent } from "../constants";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Project = () => (
  <section id="project" className="project">
    <div className="container">
      <motion.div
        className="heading col-lg-7"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Our Latest Project</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          doloribus voluptatibus sunt beatae aperiam, consectetur temporibus
          voluptate laborum, ea sequi assumenda, earum ipsa architecto deleniti!
        </p>
      </motion.div>
      <div className="row">
        {projectContent.map((item, index) => (
          <motion.div
            className="col-md-6 col-lg-4"
            key={item.key}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="project-box">
              <div className="img">
                <img src={item.src} alt="project" />
                <div className="project-overlay">
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
              <div className="p-3">
                <a href="/">
                  <h4>{item.heading}</h4>
                </a>
                <p>{item.info}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Project;
