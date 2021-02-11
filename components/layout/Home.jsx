import React, { useEffect } from "react";

// Components
import Hero from "../Hero";
import CTA from "../CTA";
import FAQ from "../FAQ";
import Foundation from "../Foundation";
import Press from "../Press";
import Footer from "../Footer";

const Home = ({ loading, setVideoOpen, setDonateOpen }) => {
  useEffect(() => {
    console.log(window.location);
    //verificar si hay from to y msg para evitar hardcodeo
    if (window.location.href.includes("success")) {
      alert("Thank you for your donation!");
    } else if (window.location.href.includes("failed")) {
      alert("Ups! There was an error! Try it later.");
    }
  }, []);

  return (
    <div className="home">
      <Hero setVideoOpen={setVideoOpen} loading={loading} />
      <CTA setDonateOpen={setDonateOpen} />
      <FAQ />
      <Foundation />
      <Press />
      <Footer />
    </div>
  );
};

export default Home;
