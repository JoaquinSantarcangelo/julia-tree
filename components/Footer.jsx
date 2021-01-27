import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="logo">
          <img src="/assets/logo.svg" alt="" />
        </div>
        <div className="links">
          <div className="link">Donate</div>
          <div className="link">Faqs</div>
          <div className="link">News</div>
          <div className="link">Website Policy</div>
        </div>
        <div className="divider"></div>
        <div className="video-by">
          <div className="line">Video by:</div>
          <div className="line">Alynor Diaz</div>
          <div className="line">Marcel Franco</div>
          <div className="line">William Verga</div>
          <div className="line">Agustin De Martino</div>
        </div>
        <div className="website-by">
          <div className="line">Website by Salvé:</div>
          <div className="line">Kyle Byrne</div>
          <div className="line">Juan Cadile</div>
          <div className="line">Guido Ponce</div>
          <div className="line">Gianluca Nicolicchia</div>
          <div className="line">Joaquin Santarcangelo</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
