import React from "react";
import "../css/Contact.css";
import { contact } from "../assets/img";
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

const btnVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
  hover: {
    color: "white",
    translateY: "-5px",
    boxShadow: "0 4px 20px rgb(57 86 222 0.5)",
  },
  hover2: {
    color: "white",
    translateY: "-5px",
    boxShadow: "0 3px 10px rgb(45 214 183 0.5)",
  },
};

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <motion.div
        className="heading col-lg-7"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          doloribus voluptatibus sunt beatae aperiam,
        </p>
      </motion.div>
      <div className="row">
        <motion.div
          className="col-lg-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="contact-left text-center">
            <div className="img">
              <img src={contact} alt="contact" />
            </div>
            <div className="content">
              <h4 className="pt-3">Are You Facing Any Problem..?</h4>
              <p>
                It va esser tam simplic quam Occidental in fact it va esser
                Occidental angles quam un skeptic cambridge es.
              </p>
              <motion.a
                href="/"
                className="button"
                variants={btnVariants}
                whileHover="hover2"
              >
                start live Chat
              </motion.a>
              <p className="mt-4">Or you can contact at</p>
              <div className="row">
                <div className="col-12">
                  <div className="address">
                    <a href="/">
                      <strong>Email:</strong> kayeskhanakash@gmail.com
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="address mt-4">
                    <p>
                      <strong>Phone:</strong> +8801734909372
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-lg-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            when: "beforeChildren",
          }}
        >
          <form action="">
            <h2 className="py-3">get in touch</h2>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="fname">First Name</label>
                <br />
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Enter..."
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lname">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Enter..."
                />
              </div>
              <div className="col-12">
                <label htmlFor="email">Your Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                />
              </div>
              <div className="col-12">
                <label htmlFor="massage">Your Email</label>
                <br />
                <textarea
                  name="massage"
                  id="massage"
                  cols="50"
                  rows="6"
                  placeholder="Massage..."
                ></textarea>
              </div>
              <div className="col-4 pt-3">
                <div>
                  <motion.input
                    className="button"
                    variants={btnVariants}
                    whileHover="hover"
                    type="submit"
                    value="Send Massage"
                  />
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);
export default Contact;
