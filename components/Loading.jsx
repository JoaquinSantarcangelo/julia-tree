import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="loading"
    >
      <div className="wrapper">
        <div class="lds-default">
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
      </div>
    </motion.div>
  );
};

export default Loading;
