import React, { useEffect } from "react";

// Components
import Hero from "../Hero";
import CTA from "../CTA";
import FAQ from "../FAQ";
import Foundation from "../Foundation";
import Press from "../Press";
import Footer from "../Footer";

const Home = ({
  loading,
  setVideoOpen,
  setDonateOpen,
  formState,
  setPressOpen,
  setPolicyOpen,
}) => {
  return (
    <div className="home">
      <Hero setVideoOpen={setVideoOpen} loading={loading} />
      <CTA setDonateOpen={setDonateOpen} />
      <FAQ />
      <Foundation />
      <Press setPressOpen={setPressOpen} setDonateOpen={setDonateOpen} />
      <Footer setPolicyOpen={setPolicyOpen} />
    </div>
  );
};

export default Home;
