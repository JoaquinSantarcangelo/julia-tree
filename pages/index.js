import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll, animateScroll } from "react-scroll";
import { saveAs } from "file-saver";

import axiosClient from "../config/axios";

//Components
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Home from "../components/layout/Home";
import Loading from "../components/Loading";
import DonateForm from "../components/DonateForm";
import DonateSuccess from "../components/DonateSuccess";

//Material Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PressModal from "../components/PressModal";

export default function Index({ query }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [donateSuccess, setDonateSuccess] = useState(false);
  const [pressOpen, setPressOpen] = useState(false);
  const [activePress, setActivePress] = useState({});
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState({
    from: "",
    to: "",
    message: "",
    quantity: 1,
    subscription: false,
  });

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
        animateScroll.scrollToTop();
      });
    };
    pageLoaded();
  }, []);

  //#region LETTER SECTION
  const createLetter = () => {
    //"https://api.thejuliatree.org/api/create-pdf"
    //https://the-julia-tree-api.herokuapp.com
    fetch("https://the-julia-tree-api.herokuapp.com/api/create-pdf", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.msg === "success") {
          requestLetter();
        }
      })
      .catch((error) => console.log(error));
  };

  const requestLetter = async () => {
    try {
      const pdf = await axiosClient("/api/fetch-pdf", { responseType: "blob" });
      let downloableFile = new Blob([pdf.data], { type: "application/pdf" });
      saveAs(downloableFile, "The-Julia-Tree.pdf");
      sessionStorage.removeItem("data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let formValue = JSON.parse(sessionStorage.getItem("data"));

    if (window.location.href.includes("success")) {
      if (formValue && formValue.from !== "") {
        setFormState(formValue);
        setDonateSuccess(true);
      }
    }
  }, []);
  //#endregion

  return (
    <div className={!loading ? "app" : "app fixed"}>
      <Head>
        <title>The Julia Tree</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
      </Head>

      <AnimatePresence>
        {pressOpen && <PressModal setPressOpen={setPressOpen} />}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {donateOpen && (
          <DonateForm
            formState={formState}
            setFormState={setFormState}
            setDonateOpen={setDonateOpen}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {donateSuccess && (
          <DonateSuccess
            setDonateSuccess={setDonateSuccess}
            user={formState.from}
            createLetter={createLetter}
          />
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {loading && <Loading />}
      </AnimatePresence>
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
        loading={loading}
        formState={formState}
        setPressOpen={setPressOpen}
      />
    </div>
  );
}

Index.getInitialProps = ({ query }) => {
  return { query };
};
