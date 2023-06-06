import React from "react";
import "../css/Service.css";
import { serviceContent } from "../constants";
import { motion } from "framer-motion";

// for animation

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
  visible: { opacity: 1, y: 0 },
};

const Service = () => (
  <section id="services" className="services">
    <div className="container">
      <motion.div
        className="heading col-lg-7"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          doloribus voluptatibus sunt beatae aperiam, consectetur temporibus
          voluptate laborum, ea sequi assumenda, earum ipsa architecto deleniti!
        </p>
      </motion.div>
      <div className="row">
        {serviceContent.map((item, index) => (
          <motion.div
            className="col-lg-4 pt-5"
            key={item.key}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
          >
            <div className="service-box">
              <div className="img">
                <img src={item.src} alt="services" />
              </div>
              <div className="content">
                <h4>{item.heading}</h4>
                <p className="mb-4">{item.info}</p>
                <a href="/">
                  More<i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;
