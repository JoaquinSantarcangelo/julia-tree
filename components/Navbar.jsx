import React from "react";
import { motion } from "framer-motion";

//Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = ({ menuOpen, handleMenu }) => {
  return (
    <div className="navbar">
      <div id="logo" className="logo">
        <h1>Julia Tree</h1>
      </div>
      <div onClick={() => handleMenu()} className="menu-button">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="close-icon"
          >
            <CloseIcon />
          </motion.div>
        )}
        {!menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="open-icon"
          >
            <MenuIcon />
          </motion.div>
        )}
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Navbar;
