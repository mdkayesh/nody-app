import React from "react";
import "../css/News.css";
import { news1 } from "../assets/img";
import { newsContent } from "../constants";
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
const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};
const News = () => (
  <section id="news" className="news">
    <div className="container">
      <motion.div
        className="heading col-lg-7"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Latest News</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          doloribus voluptatibus sunt beatae aperiam,
        </p>
      </motion.div>
      <div className="row">
        <motion.div
          className="col-lg-6 pt-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="img">
            <img src={news1} alt="news" />
          </div>
        </motion.div>
        <div className="col-lg-6">
          {newsContent.map((news, index) => (
            <motion.div
              className="news-content pt-4"
              key={index}
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="row">
                <div className="img col-5">
                  <img src={news.src} alt="news" />
                </div>
                <div className="news-info col-7">
                  <a href="/">
                    <h4>{news.heading}</h4>
                  </a>
                  <p>{news.info}</p>
                  <p>
                    <span>
                      <i className="fa-regular fa-calendar"></i>
                      {news.date}
                    </span>
                    <span>
                      <i className="fa-regular fa-clock"></i>
                      {news.time}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default News;
