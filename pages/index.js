import Head from "next/head";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "../components/Menu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <Head>
        <title>Julia Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="navbar">
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
      </div>
      <AnimatePresence exitBeforeEnter>{menuOpen && <Menu />}</AnimatePresence>
      <div className="hub">
        <div className="background"></div>
      </div>
    </div>
  );
}
