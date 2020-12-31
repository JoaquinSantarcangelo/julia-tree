import Head from "next/head";

//Components
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Hub from "../components/Hub";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  //Parallax Hero
  useEffect(() => {}, []);

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
      <Router>
        <Navbar menuOpen={menuOpen} handleMenu={handleMenu} />
        <AnimatePresence exitBeforeEnter>
          {menuOpen && <Menu handleMenu={handleMenu} />}
        </AnimatePresence>

        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Hub}></Route>
                <Route path="/video" component={Video}></Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}
