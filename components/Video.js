import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";

const index = () => {
  const [videoPaused, setVideoPaused] = useState(false);

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
            <Link to="/">
              <h1>Volver al inicio </h1>
            </Link>
          </div>
        </div>
      )}
      <div className="video-container">
        <Vimeo
          video="182276651"
          onPause={() => setVideoPaused(true)}
          onPlay={() => setVideoPaused(false)}
          responsive
          loop="true"
          autoplay
        />
      </div>
    </motion.div>
  );
};

export default index;
