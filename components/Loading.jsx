import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
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
      </div>
    </motion.div>
  );
};

export default Loading;
