import React, { useState, useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";
import OnImagesLoaded from "react-on-images-loaded";

import { motion } from "framer-motion";

const index = ({ setVideoOpen }) => {
  const [videoPaused, setVideoPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!videoPaused) {
      document.querySelector("#logo").classList.add("hide");
    } else {
      document.querySelector("#logo").classList.remove("hide");
    }
  }, [videoPaused]);

  return (
    <OnImagesLoaded onLoaded={() => setLoaded(true)} timeout={3000}>
      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="video"
          onLoad={() => console.log("Cargo")}
        >
          {/* {videoPaused && (
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
      )} */}
          <motion.div
            initial={{ opacity: 0, height: "0" }}
            animate={{
              opacity: 1,
              height: "fit-content",
              transition: { delay: 1 },
            }}
            exit={{ opacity: 0, height: "0%" }}
            className="video-container"
          >
            <Vimeo
              video="340200656"
              onPause={() => setVideoPaused(true)}
              onPlay={() => setVideoPaused(false)}
              onEnd={() => setVideoOpen(false)}
              responsive
              background
              fullscreen
              autoplay
            />
          </motion.div>
        </motion.div>
      )}
    </OnImagesLoaded>
  );
};

export default index;
