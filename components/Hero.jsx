import React, { useEffect } from "react";
import { animate, AnimatePresence, motion, useAnimation } from "framer-motion";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

const Hero = ({ loading, setVideoOpen }) => {
  //On component render configs
  useEffect(() => {
    document.querySelector("#logo").classList.remove("hide");
  }, []);

  //Framer Motion Avariants
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quos
          vitae maiores, ullam unde, praesentium dicta ea corporis labore, quia
          quidem nam. Tempore dolores illum earum eveniet ipsam hic laboriosam!
        </motion.div>
        <motion.div
          onClick={() => setVideoOpen(true)}
          variants={variants2}
          className="buttons"
        >
          <div id="watch-video" className="button">
            <OndemandVideoIcon />
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
              <motion.img
                animate={{
                  filter: [
                    "brightness(100%)",
                    "brightness(120%)",
                    "brightness(100%)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
                exit={{ filter: "brightness(100%)" }}
                src="assets/img/hero/Layer1.png"
                alt=""
              />
            </div>
            <div id="layer2" className="layer">
              <motion.img
                animate={{
                  filter: [
                    "brightness(100%)",
                    "brightness(130%)",
                    "brightness(100%)",
                  ],
                }}
                exit={{ filter: "brightness(100%)" }}
                transition={{ repeat: Infinity, duration: 3 }}
                src="assets/img/hero/Layer2.png"
                alt=""
              />
            </div>
            <div id="layer3" className="layer">
              <motion.img
                animate={{
                  y: [0, 40, 0],
                  filter: [
                    "brightness(100%)",
                    "brightness(170%)",
                    "brightness(100%)",
                  ],
                }}
                exit={{ filter: "brightness(100%)", y: 0 }}
                transition={{ repeat: Infinity, duration: 2.8 }}
                src="assets/img/hero/Layer3_1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;
