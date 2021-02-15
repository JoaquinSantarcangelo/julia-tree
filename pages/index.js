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
import WebsitePolicy from "../components/WebsitePolicy";

//Material Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PressModal from "../components/PressModal";

export default function Index({ query }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [donateSuccess, setDonateSuccess] = useState(false);
  const [pressOpen, setPressOpen] = useState(false);
  const [activePress, setActivePress] = useState({});
  const [loading, setLoading] = useState(true);
  const [pdfemail, setPdfEmail] = useState('');
  const [loadingemail, setLoadingEmail] = useState({status: 'null', msg: 'Not sent.'});
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
  const createLetter = async () => {
    try {
      //https://the-julia-tree-api.herokuapp.com
      const response = await axiosClient.post("/api/create-pdf", formState, {
        responseType: "blob",
      });
      const pdf = response;
      let downloableFile = new Blob([pdf.data], { type: "application/pdf" });
      saveAs(downloableFile, "The-Julia-Tree.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  const automaticDownload = async () => {
    try {
      const response = await axiosClient.post("/api/create-pdf", {
        from: "Guido",
        to: "Juan",
        message: "Va bien el pdf?",
        quantity: 1
      }/*formState*/, {
        responseType: "blob",
      });
      const pdf = response;
      let downloableFile = new Blob([pdf.data], { type: "application/pdf" });
      saveAs(downloableFile, "The-Julia-Tree.pdf");

      const data = window.URL.createObjectURL(downloableFile);
      const link = document.createElement("a");
      link.href = data;
      link.download = "The-Julia-Tree.pdf";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    automaticDownload();

    let formValue = JSON.parse(sessionStorage.getItem("data"));

    if (window.location.href.includes("success")) {
      if (formValue && formValue.from !== "") {
        setFormState(formValue);
        setDonateSuccess(true);
        automaticDownload();
      }
    }
  }, []);
  //#endregion

  //#region SEND EMAIL
  const sendEmail = async () => {
    if(pdfemail.trim() !== ''){
      setLoadingEmail({statue: 'pending', msg: 'Sending...'});
      try {
        const pdf = await axiosClient.post("/api/sendemail", {
          ...formState,
          pdfemail,
        });
        //ENVIADO SUCCESS
        setLoadingEmail({status: 'success', msg: 'Certificate sent successfully'});
      } catch (error) {
        setLoadingEmail({status: 'failed', msg: "The messagge couldn't be sent. Try again."});
      }
    }
  };
  //#endregion

  return (
    <div className={!loading ? "app" : "app fixed"}>
      <Head>
        <title>The Julia Tree</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />

        <meta property="og:title" content="Facebook Open Graph META Tags" />
        <meta
          property="og:image"
          content="https://i.ibb.co/HP71Srw/social.jpg"
        />
        <meta property="og:site_name" content="The Julia Tree" />
        <meta
          name="description"
          content="The Julia Tree Challenge grows trees on Africa’s Great Green Wall"
        />
        <meta property="og:url" content="http://thejuliatree.org" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <AnimatePresence>
        {pressOpen && <PressModal setPressOpen={setPressOpen} />}
      </AnimatePresence>
      <AnimatePresence>
        {policyOpen && <WebsitePolicy setPolicyOpen={setPolicyOpen} />}
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
            loadingemail={loadingemail}
            createLetter={createLetter}
            setPdfEmail={setPdfEmail}
            sendEmail={sendEmail}
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
          <FacebookIcon onClick={() => window.location.href="https://www.facebook.com/thejuliatree"} />
        </div>
        <div className="icon">
          <InstagramIcon onClick={() => window.location.href="https://www.instagram.com/thejuliatree/"} />
        </div>
      </div>
      <div
        onClick={() => setDonateOpen(!donateOpen)}
        className="fixed-donation"
      >
        <div className="text">Donate</div>
        <img src="/assets/img/donate-heart.png" alt="" />
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
        setPolicyOpen={setPolicyOpen}
      />
    </div>
  );
}

Index.getInitialProps = ({ query }) => {
  return { query };
};
