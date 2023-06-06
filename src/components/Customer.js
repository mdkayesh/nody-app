import React, { useEffect, useState } from "react";
import "../css/Customer.css";
import { sliderItem } from "../constants";
import { motion } from "framer-motion";

const Customer = () => {
  let [slide, setSlide] = useState(0);

  useEffect(() => {
    let time = setTimeout(() => setSlide(slide + 1), 5000);

    // clean up

    return () => {
      clearTimeout(time);
    };
  });

  //for making slider responsive

  let length = sliderItem.length;
  let n = length - 2;
  let width = window.outerWidth;

  if (width > 600 && width < 768) {
    n = length - 1;
  } else if (width <= 600) {
    n = length;
  }

  if (slide === n) setSlide(0);

  const tran = {
    transform: `translateX(${(-33.33 / 2) * slide}%)`, // add css
  };

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
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="customer" className="customer">
      <div className="container">
        <motion.div
          className="heading col-lg-7"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>What Our Customers Say</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            doloribus voluptatibus sunt beatae aperiam,
          </p>
        </motion.div>
        <div className="slider">
          <div className="item-container" style={tran}>
            {sliderItem.map((item, index) => (
              <div
                className={
                  slide === index - 1 && width > 768
                    ? "slider-item active"
                    : "slider-item"
                }
                key={item.key}
              >
                <motion.div
                  className="content"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.2 * index,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <div className="slider-img">
                    <img src={item.imgSrc} alt="slider-img" />
                  </div>
                  <p>{item.comment}</p>
                </motion.div>
                <div className="user-info">
                  <div className="img">
                    <img src={item.userImg} alt="customer" />
                  </div>
                  <h5>{item.userName}</h5>
                  <p>{item.userInfo}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="dot">
            {sliderItem.map(
              (item, index) =>
                width <= 600 &&
                index < n && (
                  <div
                    className={`${slide === index ? "active" : ""}`}
                    onClick={() => setSlide(index)}
                    key={index}
                  >
                    <span></span>
                  </div>
                )
            )}
            {sliderItem.map(
              (item, index) =>
                width > 600 &&
                width < 768 &&
                index < n && (
                  <div
                    className={`${slide === index ? "active" : ""}`}
                    onClick={() => setSlide(index)}
                    key={index}
                  >
                    <span></span>
                  </div>
                )
            )}
            {sliderItem.map(
              (item, index) =>
                width > 768 &&
                index < n && (
                  <div
                    className={`${slide === index ? "active" : ""}`}
                    onClick={() => setSlide(index)}
                    key={index}
                  >
                    <span></span>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
