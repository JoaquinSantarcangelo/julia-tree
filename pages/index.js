import Head from "next/head";

//Components
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu Hooks & Config
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

      <Navbar menuOpen={menuOpen} handleMenu={handleMenu} />
      <AnimatePresence exitBeforeEnter>{menuOpen && <Menu />}</AnimatePresence>
      <div className="hub">
        <div className="background"></div>
      </div>
    </div>
  );
}
