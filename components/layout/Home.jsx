import React from "react";

// Components
import Hero from "../Hero";
import CTA from "../CTA";
import FAQ from "../FAQ";


const Home = ({ loading, setVideoOpen }) => {
  return (
    <div className="home">
      <Hero setVideoOpen={setVideoOpen} loading={loading} />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Home;
