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
  const [pdfemail, setPdfEmail] = useState('');
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
    try{
      const response = await axiosClient.post('https://the-julia-tree-api.herokuapp.com/api/create-pdf', formState,  { responseType: "blob" });
      console.log(response)
      const pdf = response.data;
      //const pdf = await axiosClient("/api/fetch-pdf", { responseType: "blob" });
      let downloableFile = new Blob([pdf.data], { type: "application/pdf" });
      saveAs(downloableFile, "The-Julia-Tree.pdf");

    }catch(error){
      console.log(error);
    }
    console.log(formState)
/*    fetch("https://the-julia-tree-api.herokuapp.com/api/create-pdf", {
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
      .catch((error) => console.log(error));*/
  };

  const requestLetter = async (automatic=false) => {
    try {
      const pdf = await axiosClient("/api/fetch-pdf", { responseType: "blob" });
      let downloableFile = new Blob([pdf.data], { type: "application/pdf" });
      saveAs(downloableFile, "The-Julia-Tree.pdf");
      
      if(automatic){
        const data = window.URL.createObjectURL(downloableFile);
        const link = document.createElement('a');
        link.href = data;
        link.download = "The-Julia-Tree.pdf";
      }else{
        console.log('no automatic')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const automaticDownload = async () => {
    const response = await axiosClient.post('https://the-julia-tree-api.herokuapp.com/api/create-pdf', formState);
    
    if (response.data.msg === "success") {
      requestLetter(true);
    }
  }

  useEffect(() => {
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
      try {
        const pdf = await axiosClient.post("/api/sendemail", {...formState, pdfemail});
        //ENVIADO SUCCESS
        console.log(pdf)
      } catch (error) {
        console.log(error);
      }
    }
  }
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
          <FacebookIcon />
        </div>
        <div className="icon">
          <InstagramIcon />
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
      />
    </div>
  );
}

Index.getInitialProps = ({ query }) => {
  return { query };
};
