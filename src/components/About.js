import React from "react";
import about from "../assets/about-img1.png";
import about2 from "../assets/about-img2.png";
import { motion } from "framer-motion";
import "../css/About.css";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};
const fadeLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 130,
      damping: 10,
      type: "spring",
    },
  },
};

const About = () => (
  <section id="about" className="about">
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="heading col-lg-7" variants={fadeLeft}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          doloribus voluptatibus sunt beatae aperiam, consectetur temporibus
          voluptate laborum, ea sequi assumenda, earum ipsa architecto deleniti!
        </p>
      </motion.div>
      <div className="row">
        <motion.div className="col-lg-4 pt-5 pt-lg-0" variants={fadeUp}>
          <div className="developer">
            <h2>
              Productive & Customizable For
              <span>Developers</span>
            </h2>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil atque corrupti molestiae.
            </p>
            <p>
              <i className="fa-solid fa-table-cells-large"></i>Marketing program
              activities
            </p>
            <p>
              <i className="fa-solid fa-table"></i>Customization product
            </p>
            <p>
              <i className="fa-solid fa-desktop"></i>At vero eos accusamus iusto
            </p>
            <a href="/">
              More Information <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </motion.div>
        <motion.div className="col-lg-4 pt-5 pt-lg-0" variants={fadeUp}>
          <div className="product">
            <div className="img">
              <img src={about} alt="about" />
            </div>
            <div className="mt-3">
              <p>DEVELOPMENT</p>
              <h4>Product Development</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed quia consequuntur magni.
              </p>
              <a href="/">
                Read More <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="col-lg-4 pt-5 pt-lg-0" variants={fadeUp}>
          <div className="marketing">
            <div className="img">
              <img src={about2} alt="about" />
            </div>
            <div className="mt-3">
              <p>MARKETING</p>
              <h4>Marketing Product</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed quia consequuntur magni.
              </p>
              <a href="/">
                Read More <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;
