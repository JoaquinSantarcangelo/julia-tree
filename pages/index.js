import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OnImagesLoaded from "react-on-images-loaded";
import { Scroll, animateScroll } from "react-scroll";

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
  const [donateOpen, setDonateOpen] = useState(false);
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

  //Scroll To Top
  useEffect(() => {
    const pageLoaded = () => {
      window.addEventListener("load", () => {
        setLoading(false);
      });
    };
    pageLoaded();
    animateScroll.scrollToTop();
  }, []);

  const onPageLoad = () => {
    console.log("Ya cargo");
    setLoading(false);
  };

  return (
    <div className={!loading ? "app" : "app fixed"}>
      <Head>
        <title>Julia Tree</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="assets/img/49.png"></link>
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
        <script src="https://www.paypal.com/sdk/js?client-id=ID"></script>
      </Head>
      <AnimatePresence exitBeforeEnter>
        {donateOpen && <DonateForm setDonateOpen={setDonateOpen} />}
      </AnimatePresence>
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

      <AnimatePresence exitBeforeEnter initial={false}>
        {videoOpen && (
          <Video setDonateOpen={setDonateOpen} setVideoOpen={setVideoOpen} />
        )}
      </AnimatePresence>
      <Home
        setDonateOpen={setDonateOpen}
        setVideoOpen={setVideoOpen}
        onPageLoad={onPageLoad}
        loading={loading}
      />
    </div>
  );
}
