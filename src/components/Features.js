import React, { useState } from "react";
import "../css/Features.css";
import { featuresImg, featuresContent } from "../constants";
import { motion } from "framer-motion";

const Features = () => {
  const [show, setShow] = useState(0);

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

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div
          className="heading col-lg-7"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Our Features</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            doloribus voluptatibus sunt beatae aperiam, consectetur temporibus
            voluptate laborum, ea sequi assumenda, earum ipsa architecto
            deleniti!
          </p>
        </motion.div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            {featuresImg.map((img, index) => {
              return (
                <div
                  className={show === index ? "img active" : "img"}
                  key={index}
                >
                  {show === index && (
                    <img src={img.img} alt="features" key={index} />
                  )}
                </div>
              );
            })}
          </div>
          <div className="col-lg-5 ms-lg-5">
            {featuresContent.map((content, index) => (
              <motion.div
                className={`features-content ${show === index ? "active" : ""}`}
                key={index}
                onClick={() => setShow(index)}
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  stiffness: 120,
                  type: "spring",
                }}
              >
                <ul>
                  <li>
                    <div>
                      <h4>{content.h4}</h4>
                      <p>{content.p}</p>
                      <a href="/" className="link">
                        More Information<i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
