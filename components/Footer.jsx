import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = ({ setPolicyOpen }) => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="main-footer">
          <div className="logo">
            <img src="/assets/logo.svg" alt="" />
          </div>
          <div className="links">
            <Link to="cta" spy={true} smooth={true} duration={500}>
              <div className="link">Donate</div>
            </Link>
            <Link to="faq" spy={true} smooth={true} duration={500}>
              <div className="link">Faqs</div>
            </Link>
            <Link to="foundation" spy={true} smooth={true} duration={500}>
              <div className="link">Foundation</div>
            </Link>
            <div onClick={() => setPolicyOpen(true)} className="link">
              Website Policy
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="made-by-footer">
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://salve.agency"
            target="_blank"
            rel="noreferrer"
          >
            <div className="website-by">
              <div className="line title">Website by Salvé:</div>
              <div className="line">Juan Cadile</div>
              <div className="line">Guido Ponce</div>
              <div className="line">Gianluca Nicolicchia</div>
              <div className="line">Joaquin Santarcángelo</div>
            </div>
          </a>
          <div className="video-by">
            <div className="line title">Video by:</div>
            <div className="line">Alynor Diaz</div>
            <div className="line">Marcel Franco</div>
            <div className="line">William Verga</div>
            <div className="line">Agustin De Martino</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
