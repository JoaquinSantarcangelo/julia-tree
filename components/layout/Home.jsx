import React, { useEffect } from "react";

// Components
import Hero from "../Hero";
import CTA from "../CTA";
import FAQ from "../FAQ";
import Foundation from "../Foundation";
import Press from "../Press";
import Footer from "../Footer";

const Home = ({ loading, setVideoOpen }) => {
  return (
    <div className="home">
      <Hero setVideoOpen={setVideoOpen} loading={loading} />
      <CTA />
      <FAQ />
      <Foundation />
      {/* <Press/> */}
      <Footer/>
    </div>
  );
};

export default Home;
