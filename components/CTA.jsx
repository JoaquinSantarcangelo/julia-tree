import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GetAppIcon from "@material-ui/icons/GetApp";

import {
  FacebookShareButton,
  TwitterShareButton,
  InstagramShareButton,
  WhatsappShareButton,
} from "react-share";

const CTA = ({ setDonateOpen }) => {
  return (
    <div id="cta" className="cta">
      <div className="background"></div>
      <div className="wrapper">
        <div onClick={() => setDonateOpen(true)} className="heart">
          <div className="wrapper">
            <div className="text">
              <div className="line1">Grow a</div>
              <div className="line2">Julia Tree</div>
              
            </div>
            <img src="/assets/img/donate-heart.png" alt="" />
          </div>
        </div>
        <div className="hand">
          <img src="/assets/img/donate-hand.webp" alt="" />
        </div>
        <div className="share-now">
          <div className="title">Share now!</div>
          <div className="buttons">
            <div className="button">
              <span>
                <FacebookShareButton
                  url="https://www.thejuliatree.org/"
                  quote={
                    "Join me growing hope, peace, and a healthy planet on Africa’s Great Green Wall"
                  }
                >
                  <FacebookIcon />
                </FacebookShareButton>
              </span>
            </div>

            <div className="button">
              <TwitterShareButton
                url="https://www.thejuliatree.org/"
                title={
                  "Join me growing hope, peace, and a healthy planet on Africa’s Great Green Wall"
                }
              >
                <TwitterIcon />
              </TwitterShareButton>
            </div>
            <div className="button">
              <WhatsappShareButton
                url="https://www.thejuliatree.org/"
                title={
                  "Join me growing hope, peace, and a healthy planet on Africa’s Great Green Wall"
                }
                separator=" "
              >
                <WhatsAppIcon />
              </WhatsappShareButton>
            </div>
            <a href="#" download>
              <div className="button">
                <GetAppIcon />
              </div>
            </a>
          </div>
        </div>
        <a href="#" download>
          <div className="download-content">
            <GetAppIcon /> Download Content
          </div>
        </a>
      </div>
    </div>
  );
};

export default CTA;
