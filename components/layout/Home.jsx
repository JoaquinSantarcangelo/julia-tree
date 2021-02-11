import React, { useEffect } from "react";

// Components
import Hero from "../Hero";
import CTA from "../CTA";
import FAQ from "../FAQ";
import Foundation from "../Foundation";
import Press from "../Press";
import Footer from "../Footer";

const Home = ({ loading, setVideoOpen, setDonateOpen, formState }) => {


  useEffect(() => {
    if(verifyDonation()){
      //requestLetter();
      
    } 
     
  }, []);

  const verifyDonation = () => {
    if(formState.from !== ''){
      if (window.location.href.includes("success")) {
        alert("Thank you for your donation!");
      } else if (window.location.href.includes("failed")) {
        alert("Ups! There was an error! Try it later.");
      }
    }    
  }

  const destructureQuery = () => {
    let url = window.location.href;
    
    //split de innecesario
    url = url.split('success?');
    
    for(let i = 0; i < url[1].length; i++){

    }
    
    /*
    var str = "Visit Microsoft!";
    var res = str.replace("Microsoft", "W3Schools");
    */
  }
  destructureQuery();  
  

  const requestLetter = async () => {
    const response = await fetch('https://api.thejuliatree.org/api/create-pdf', {
      method: "POST",
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(formState)
    }).catch((error) => console.log(error));


  }

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