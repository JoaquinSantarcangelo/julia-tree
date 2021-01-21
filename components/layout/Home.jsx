import React, { useEffect } from "react";

// Components
import Hero from "../Hero";
import CTA from "../CTA";
import FAQ from "../FAQ";
import Fundation from '../Fundation';

const Home = ({ loading, setVideoOpen }) => {
  return (
    <div className="home">
      <Hero setVideoOpen={setVideoOpen} loading={loading} />
      <CTA />
      <FAQ />
      <Fundation />
    </div>
  );
};

export default Home;
