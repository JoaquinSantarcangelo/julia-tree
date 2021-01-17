import React, { useState, useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";

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
      {videoPaused && (
        <div className="pause-modal">
          <div className="container">
            <div onClick={() => setVideoOpen(false)}>
              <h1>Volver al inicio </h1>
            </div>
          </div>
        </div>
      )}
      <div className="video-container">
        <Vimeo
          video="340200656"
          onPause={() => setVideoPaused(true)}
          onPlay={() => setVideoPaused(false)}
          onEnd={() => setVideoOpen(false)}
          responsive
          autoplay
        />
      </div>
    </motion.div>
  );
};

export default index;
