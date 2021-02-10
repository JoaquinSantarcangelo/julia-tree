import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = () => {
  useEffect(() => {
    const pageLoaded = () => {
      window.addEventListener("load", () => {
        setLoading(false);
      });
    };
    pageLoaded();
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="loading"
    >
      <div className="wrapper">
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        Loading...
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={!loading ? { opacity: 0 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        className="clouds-load"
      >
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
