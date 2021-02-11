import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const DonateSuccess = ({ user, setDonateSuccess, createLetter }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="donate-success"
    >
      <div className="wrapper">
        <div onClick={() => setDonateSuccess(false)} className="close-icon">
          <CloseIcon />
        </div>
        <div className="title">
          Thanks <span>{user}</span> for your donation!
        </div>
        <div onClick={() => createLetter()} className="download">
          <GetAppIcon /> Download certificate
        </div>
      </div>
    </motion.div>
  );
};

export default DonateSuccess;
