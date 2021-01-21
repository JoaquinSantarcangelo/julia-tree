import React, { useEffect } from "react";

// Components
import Hero from "../Hero";
import CTA from "../CTA";
import FAQ from "../FAQ";
import Foundation from '../Fundation';

const Home = ({ loading, setVideoOpen }) => {
  return (
    <div className="home">
      <Hero setVideoOpen={setVideoOpen} loading={loading} />
      <CTA />
      <FAQ />
      <Foundation />
    </div>
  );
};

export default Home;
