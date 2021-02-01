import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

//Components
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Home from "../components/layout/Home";
import Loading from "../components/Loading";
import DonateForm from "../components/DonateForm";

//Material Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  // Menu Hooks & Config
  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Hooks for Scrolling Animations
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  //Fake Loading
  useEffect(() => {
    scrollTo(0, 0);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="app">
      <Head>
        <title>Julia Tree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>{loading && <Loading />}</AnimatePresence>
      <Navbar
        offsetY={offsetY}
        videoOpen={videoOpen}
        menuOpen={menuOpen}
        handleMenu={handleMenu}
        setVideoOpen={setVideoOpen}
      />
      <Menu
        setVideoOpen={setVideoOpen}
        menuOpen={menuOpen}
        handleMenu={handleMenu}
      />
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
      <AnimatePresence exitBeforeEnter>
        {donateOpen && <DonateForm />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter initial={false}>
        {videoOpen && <Video setVideoOpen={setVideoOpen} />}
      </AnimatePresence>
      <Home setVideoOpen={setVideoOpen} loading={loading} />
    </div>
  );
}
