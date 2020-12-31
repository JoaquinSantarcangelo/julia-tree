import React, { useEffect } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Hub = ({ loading }) => {
  useEffect(() => {
    document.querySelector("#logo").classList.remove("hide");
  }, []);

  const controls = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={loading ? { opacity: 0 } : { opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hub"
    >
      <div className="wrapper">
        <div className="title">Julia Tree</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quos
          vitae maiores, ullam unde, praesentium dicta ea corporis labore, quia
          quidem nam. Tempore dolores illum earum eveniet ipsam hic laboriosam!
        </div>
        <div className="buttons">
          <Link to="/video" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="button">Watch Video</div>
          </Link>
          <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="button">Enter Website</div>
          </Link>
        </div>
      </div>
      <div className="background"></div>
    </motion.div>
  );
};

export default Hub;
