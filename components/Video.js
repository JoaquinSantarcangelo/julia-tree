import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";

const index = () => {
  const [videoPaused, setVideoPaused] = useState(false);
  const history = useHistory();

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
            <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
              <h1>Volver al inicio </h1>
            </Link>
          </div>
        </div>
      )}
      <div className="video-container">
        <Vimeo
          video="340200656"
          onPause={() => setVideoPaused(true)}
          onPlay={() => setVideoPaused(false)}
          onEnd={() => history.push("/")}
          responsive
          autoplay
        />
      </div>
    </motion.div>
  );
};

export default index;
