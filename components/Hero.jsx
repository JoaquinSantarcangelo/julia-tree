import React, { useEffect } from "react";
import { animate, AnimatePresence, motion, useAnimation } from "framer-motion";

const Hero = ({ loading, setVideoOpen }) => {
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
    <motion.div id="hero" className="hero">
      <motion.div className="wrapper">
        <motion.div variants={variants2} className="title">
          The Julia Tree
        </motion.div>
        <motion.div variants={variants2} className="subtitle">
          Growing hope, jobs, justice, and peace around the world and on
          Africa’s Great Green Wall.
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
        <div className="background">
          <div className="layers">
            <div id="layer0" className="layer">
              <div className="img"></div>
            </div>
            <div id="layer1" className="layer">
              <img src="assets/img/hero/Layer1.webp" alt="" />
            </div>
            <div id="layer2" className="layer">
              <img src="assets/img/hero/Layer2.webp" alt="" />
            </div>
            <div id="layer3" className="layer">
              <img src="assets/img/hero/Fruto2.webp" alt="" />
              <img src="assets/img/hero/Fruto1.webp" alt="" />
              <img src="assets/img/hero/Fruto3.webp" alt="" />
            </div>
            <div id="layer3-alt" className="layer">
              <img src="assets/img/hero/Fruto2.webp" alt="" />
              <img src="assets/img/hero/Fruto1.webp" alt="" />
              <img src="assets/img/hero/Fruto3.webp" alt="" />
              <img src="assets/img/hero/Fruto2.webp" alt="" />
              <img src="assets/img/hero/Fruto3.webp" alt="" />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;
