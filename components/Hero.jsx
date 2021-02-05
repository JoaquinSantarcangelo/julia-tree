import React, { useEffect } from "react";
import { animate, AnimatePresence, motion, useAnimation } from "framer-motion";

const Hero = ({ loading, setVideoOpen, onPageLoad }) => {
  //On component render configs
  useEffect(() => {
    document.querySelector("#logo").classList.remove("hide");
  }, []);

  //Framer Motion Variants
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
      animate="visible"
      transition={{
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.5,
      }}
      exit="exit"
      id="hero"
      className="hero"
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
          The Julia Tree
        </motion.div>
        <motion.div variants={variants2} className="subtitle">
          Growing hope, jobs, justice, and peace on Africa’s Great Green Wall.
        </motion.div>
        <motion.div
          onClick={() => setVideoOpen(true)}
          variants={variants2}
          className="buttons"
        >
          <div id="watch-video" className="button">
            Watch video
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        <div className="background" onLoad={() => onPageLoad()}>
          <div className="layers">
            <div id="layer0" className="layer">
              <div className="img"></div>
            </div>
            <div id="layer1" className="layer">
              <img src="assets/img/hero/Layer1.png" alt="" />
            </div>
            <div id="layer2" className="layer">
              <img src="assets/img/hero/Layer2.png" alt="" />
            </div>
            <div id="layer3" className="layer">
              <img src="assets/img/hero/Fruto2.png" alt="" />
              <img src="assets/img/hero/Fruto1.png" alt="" />
              <img src="assets/img/hero/Fruto3.png" alt="" />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;
