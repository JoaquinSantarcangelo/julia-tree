import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 2, ease: "easeInOut" } },
};

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate="visible"
      exit="exit"
      variants={variants}
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

      <div className="clouds-load">
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
        <img src="/assets/img/49.png" alt="" />
      </div>
    </motion.div>
  );
};

export default Loading;
