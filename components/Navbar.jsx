import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

//Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = ({ menuOpen, setVideoOpen, videoOpen, handleMenu, offsetY }) => {
  const controls = useAnimation();
  const [prevY, setPrevY] = useState(0);

  useEffect(() => {
    setPrevY(offsetY);
    if (prevY < offsetY) {
      //Esta bajando
      if (!menuOpen) {
        controls.start({ opacity: 0 });
      }
    } else {
      //Esta subiendo
      controls.start({ opacity: 1 });
    }
  }, [offsetY]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="navbar"
      onMouseOver={() => controls.start({ opacity: 1 })}
    >
      <div id="logo" className={videoOpen ? "logo hide" : "logo"}>
        <img src="/assets/logo.svg" alt="" />
      </div>
      <div className="menu-button">
        {(menuOpen || videoOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="close-icon"
            onClick={() => {
              if (videoOpen) {
                document.querySelector("#logo").classList.remove("hide");
                setVideoOpen(false);
              } else {
                handleMenu();
              }
            }}
          >
            <CloseIcon />
          </motion.div>
        )}
        {!menuOpen && !videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="open-icon"
            onClick={() => handleMenu()}
          >
            <MenuIcon />
          </motion.div>
        )}
      </div>
      <div className="overlay"></div>
    </motion.div>
  );
};

export default Navbar;
