import React from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const pressItems = [
  { title: "A message from our patrons", text: "https://www.google.com" },
  { title: "Grow a Julia Tree", link: "#cta" },
  {
    title: "Great Green Wall Film",
    link:
      "https://www.youtube.com/watch?v=kB1qK_yBVxU&ab_channel=TheGreatGreenWall",
  },
];

const Press = ({ setDonateOpen, setPressOpen }) => {
  return (
    <div className="press">
      <div className="clouds">
        <div className="cloud">
          <img src="/assets/img/49.png" alt="" />
        </div>
        <div className="cloud">
          <img src="/assets/img/49.png" alt="" />
        </div>
        <div className="cloud">
          <img src="/assets/img/49.png" alt="" />
        </div>
      </div>
      <div className="title">
        <h2 hidden>Press</h2>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        className="press-hearts"
      >
        <div className="press-heart">
          <div className="title">{pressItems[0].title}</div>
          <a onClick={() => setPressOpen(true)}>
            <div className="read-more">Read more</div>
          </a>
        </div>
        <div className="press-heart">
          <div className="title">{pressItems[1].title}</div>
          <Link
            to="cta"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setTimeout(() => setDonateOpen(true), 500)}
          >
            <div className="read-more">Read more</div>
          </Link>
        </div>
        <div className="press-heart">
          <div className="title">{pressItems[2].title}</div>
          <a
            href={pressItems[2].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="read-more">Read more</div>
          </a>
        </div>
      </motion.div>
      <div className="people">
        <img src="/assets/img/press/press1.webp" alt="" />
        <img src="/assets/img/press/press3.webp" alt="" />
        <img src="/assets/img/press/press4.webp" alt="" />
        <img src="/assets/img/press/press5.webp" alt="" />
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Press;
