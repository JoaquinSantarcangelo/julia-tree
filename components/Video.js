import React, { useState, useEffect } from "react";
import YouTube from "@u-wave/react-youtube";
import OnImagesLoaded from "react-on-images-loaded";
import Scroll from "react-scroll";
import { ClickAwayListener } from "@material-ui/core";

import { motion } from "framer-motion";

const index = ({ setVideoOpen, setDonateOpen }) => {
  const [videoPaused, setVideoPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!videoPaused) {
      document.querySelector("#logo").classList.add("hide");
    } else {
      document.querySelector("#logo").classList.remove("hide");
    }
  }, [videoPaused]);

  const onVideoEnd = () => {
    setVideoOpen(false);

    setTimeout(
      () =>
        Scroll.scroller.scrollTo("cta", {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: 50,
        }),
      500
    );
    setTimeout(() => setDonateOpen(true), 2500);
  };

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
          <ClickAwayListener onClickAway={() => setVideoOpen(false)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              className="video-container"
            >
              <YouTube
                video="ncwTUQ8mhHQ"
                onPause={() => setVideoPaused(true)}
                onPlay={() => setVideoPaused(false)}
                onEnd={() => onVideoEnd()}
                width="100%"
                height="100%"
                autoplay
              />
            </motion.div>
          </ClickAwayListener>
        </motion.div>
      )}
    </OnImagesLoaded>
  );
};

export default index;
