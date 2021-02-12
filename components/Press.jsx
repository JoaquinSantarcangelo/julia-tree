import React from "react";
import { motion } from "framer-motion";
const pressItems = [
  { title: "A message from our patrons", link: "https://www.google.com" },
  { title: "Grow a Julia Tree", link: "https://www.google.com" },
  { title: "Great Green Wall Film", link: "https://www.youtube.com/watch?v=kB1qK_yBVxU&ab_channel=TheGreatGreenWall" },
];

const Press = ({ setDonateOpen }) => {
  return (
    <div className="press">
      <div className="clouds">
        <div className="cloud">
          <img src="/assets/img/49.png" alt="" />
        </div>
        <div className="cloud" onClick={()=>setDonateOpen(true)}>
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
        {pressItems.map((i) => {
          return (
            <div className="press-heart">
              <div className="title">{i.title}</div>
              <a href={i.link} target="_blank" rel="noopener noreferrer">
                <div className="read-more">Read more</div>
              </a>
            </div>
          );
        })}
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
