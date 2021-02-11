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

export default function Index({ query }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
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
  const verifyDonation = () => {
    if (window.location.href.includes("success")) {
      //MODAL GRACIAS POR LA DONACION
      return true;
    } else if (window.location.href.includes("failed")) {
      //MODAL ERROR EN LA DONACION
      return false;
    }
  };

  const createLetter = () => {
    //"https://api.thejuliatree.org/api/create-pdf"
    fetch(
      'http://localhost:4000/api/create-pdf',
      {
        method: "POST",
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(query),
      }
    )
    .then(response => response.json())
    .then(result => {
      if(result.msg==='success'){
        requestLetter();
      }
    })
    .catch((error) => console.log(error));   
  };

  const requestLetter = async () => {
    const pdf = await fetch(
      'http://localhost:4000/api/fetch-pdf',
      {
        method: "GET",
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        }
      }
    )
    .catch((error) => console.log(error));

    
  }

  useEffect(() => {
    if(query !== {}){
      if (verifyDonation()) {
        createLetter();
      }
    }
    
  }, []);
  //#endregion
  console.log(query);

  return (
    <div className={!loading ? "app" : "app fixed"}>
      <Head>
        <title>The Julia Tree</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {donateOpen && (
          <DonateForm
            formState={formState}
            setFormState={setFormState}
            setDonateOpen={setDonateOpen}
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
      />
    </div>
  );
}

Index.getInitialProps = ({ query }) => {
  return { query };
};
