import React, { useEffect, useState } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import VanillaTilt from "vanilla-tilt";

const Hub = ({ loading }) => {
  // Effects lights on
  const [hearts, setHearts] = useState(false);

  useEffect(() => {
    console.log(hearts);
  }, [hearts]);

  //On component render configs
  useEffect(() => {
    const background = document.querySelector("#background");
    VanillaTilt.init(background, { max: 2 });
    document.querySelector("#logo").classList.remove("hide");
  }, []);

  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { ease: "easeOut", when: "afterChildren" },
    },
  };

  const variants2 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      y: -20,
      transition: { ease: "easeOut", when: "afterChildren" },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={loading ? "hidden" : "visible"}
      transition={{
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.5,
      }}
      exit="exit"
      className="hub"
    >
      <motion.div
        transition={{
          when: "beforeChildren",
          staggerChildren: 0.4,
          ease: "easeInOut",
        }}
        initial="hidden"
        animate={loading ? "hidden" : "visible"}
        variants={variants2}
        className="wrapper"
      >
        <motion.div variants={variants2} className="title">
          Julia Tree
        </motion.div>
        <motion.div variants={variants2} className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quos
          vitae maiores, ullam unde, praesentium dicta ea corporis labore, quia
          quidem nam. Tempore dolores illum earum eveniet ipsam hic laboriosam!
        </motion.div>
        <motion.div variants={variants2} className="buttons">
          <Link
            to="/video"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div
              onMouseLeave={() => setHearts(false)}
              onMouseOver={() => setHearts(true)}
              id="watch-video"
              className="button"
            >
              <OndemandVideoIcon />
              Watch video
            </div>
          </Link>
          {/* <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="button">Learn more</div>
          </Link> */}
        </motion.div>
      </motion.div>
      <div
        id="background"
        className={hearts ? "background turn-on" : "background"}
      ></div>
    </motion.div>
  );
};

export default Hub;
