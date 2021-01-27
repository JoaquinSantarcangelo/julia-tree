import React, { useState, useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";

import CloseIcon from "@material-ui/icons/Close";

const index = ({ setVideoOpen }) => {
  const [videoPaused, setVideoPaused] = useState(false);

  useEffect(() => {
    if (!videoPaused) {
      document.querySelector("#logo").classList.add("hide");
    } else {
      document.querySelector("#logo").classList.remove("hide");
    }
  }, [videoPaused]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="video"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="close-icon"
      >
        <CloseIcon />
      </motion.div>
      {videoPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pause-modal"
        >
          <div className="container">
            <div onClick={() => setVideoOpen(false)}>
              <h1>Volver al inicio </h1>
            </div>
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="video-container"
      >
        <Vimeo
          video="340200656"
          onPause={() => setVideoPaused(true)}
          onPlay={() => setVideoPaused(false)}
          onEnd={() => setVideoOpen(false)}
          responsive
          autoplay
        />
      </motion.div>
    </motion.div>
  );
};

export default index;
