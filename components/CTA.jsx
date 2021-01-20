import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const CTA = () => {
  return (
    <div className="cta">
      <div className="wrapper1">
        
      </div>
      <div className="wrapper2">
        <div className="hand">
          <img src="" alt=""/>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
