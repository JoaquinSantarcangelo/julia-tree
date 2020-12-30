import React, { useState, useEffect } from "react";
import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";

const index = () => {
  const [videoPaused, setVideoPaused] = useState(false);

  return (
    <div className="video">
      {videoPaused && (
        <div className="pause-modal">
          <div className="container">
            <Link href="/">
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
    </div>
  );
};

export default index;
