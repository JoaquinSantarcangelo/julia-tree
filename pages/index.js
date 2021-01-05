import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Home from "../components/Home";
import Hub from "../components/Hub";
import Loading from "../components/Loading";

//Material Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  // Menu Hooks & Config
  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="app">
      <Head>
        <title>Julia Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      <Router>
        <Navbar menuOpen={menuOpen} handleMenu={handleMenu} />
        <AnimatePresence exitBeforeEnter>
          {menuOpen && <Menu handleMenu={handleMenu} />}
        </AnimatePresence>
        <div className="social-icons">
          <div className="icon">
            <FacebookIcon />
          </div>
          <div className="icon">
            <InstagramIcon />
          </div>
          <div className="icon">
            <TwitterIcon />
          </div>
        </div>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route
                  path="/"
                  exact
                  render={() => <Hub loading={loading} />}
                ></Route>
                <Route path="/video" component={Video}></Route>
                <Route path="/home" component={Home}></Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}
