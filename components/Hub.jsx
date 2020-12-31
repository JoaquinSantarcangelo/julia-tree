import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Hub = () => {
  useEffect(() => {
    document.querySelector("#logo").classList.remove("hide");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hub"
    >
      <div className="wrapper"></div>
      <div className="background"></div>
    </motion.div>
  );
};

export default Hub;
