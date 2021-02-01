import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GetAppIcon from "@material-ui/icons/GetApp";

const CTA = ({ setDonateOpen }) => {
  return (
    <div className="cta">
      <div className="background"></div>
      <div className="wrapper">
        <div onClick={() => setDonateOpen(true)} className="heart">
          <div className="wrapper">
            <div className="text">
              <div className="line1">Plan a</div>
              <div className="line2">Julia Tree</div>
            </div>
            <img src="/assets/img/donate-heart.png" alt="" />
          </div>
        </div>
        <div className="hand">
          <img src="/assets/img/donate-hand.png" alt="" />
        </div>
        <div className="share-now">
          <div className="title">Share now!</div>
          <div className="buttons">
            <div className="button">
              <FacebookIcon />
            </div>
            <div className="button">
              <InstagramIcon />
            </div>
            <div className="button">
              <TwitterIcon />
            </div>
            <div className="button">
              <WhatsAppIcon />
            </div>
            <div className="button">
              <GetAppIcon />
            </div>
          </div>
        </div>
        <div className="download-content">
          <GetAppIcon /> Download Content
        </div>
      </div>
    </div>
  );
};

export default CTA;
