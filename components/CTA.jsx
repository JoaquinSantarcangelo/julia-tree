import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GetAppIcon from "@material-ui/icons/GetApp";

import {FacebookShareButton, TwitterShareButton, InstagramShareButton, WhatsappShareButton} from 'react-share';

const CTA = ({ setDonateOpen }) => {
  return (
    <div className="cta">
      <div className="background"></div>
      <div className="wrapper">
        <div onClick={() => setDonateOpen(true)} className="heart">
          <div className="wrapper">
            <div className="text">
              <div className="line1">Plant a</div>
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
              <FacebookShareButton
                url="https://julia-tree.vercel.app/"
                quote={"Texto para que se vea con la publicación"}
              >
                <FacebookIcon />
              </FacebookShareButton>
            </div>
            
            <div className="button">
              <TwitterShareButton
                url="https://julia-tree.vercel.app/"
                title={"Texto para que se vea con la publicación"}
              >
                <TwitterIcon />
              </TwitterShareButton>
            </div>
            <div className="button">
              <WhatsappShareButton
                url="https://julia-tree.vercel.app/"
                title={"Texto para que se vea con la publicación:"}
                separator=" "
              >
                <WhatsAppIcon />
              </WhatsappShareButton>
            </div>
            <a href="#" download><div className="button">
              <GetAppIcon />
            </div></a>
          </div>
        </div>
        <a href="#" download><div className="download-content">
          <GetAppIcon /> Download Content
        </div></a>
      </div>
    </div>
  );
};

export default CTA;

/*
<div className="button">
              <InstagramIcon />
            </div>
*/