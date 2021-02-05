import React from "react";
import { motion } from "framer-motion";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Video",
    href: "/video",
  },
  {
    text: "Donate",
    href: "/",
  },
  {
    text: "FAQ",
    href: "/",
  },
  {
    text: "Fundation",
    href: "/",
  },
];

// Framer Motion Variants

const variantsMenuItems = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  hidden: { opacity: 0 },
};

const menuVariants = {
  visible: { y: 0 },
  hidden: { y: "-100vh" },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
};

const Menu = ({ menuOpen, handleMenu, setVideoOpen }) => {
  const handleClick = () => {
    handleMenu(false);
    scrollTo(0, 0);
  };

  return (
    <motion.div
      variants={menuVariants}
      exit="hidden"
      initial="hidden"
      animate={menuOpen ? "visible" : "hidden"}
      transition={{ ease: "easeInOut", when: "beforeChildren", duration: 0.4 }}
      className="menu"
    >
      <div className="wrapper">
        <Link
          activeClass="link active"
          className="link"
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
        >
          <motion.div
            className="menu-item"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={variantsMenuItems}
            onClick={() => handleClick()}
          >
            {menuItems[0].text}
          </motion.div>
        </Link>

        <motion.div
          className="menu-item"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={variantsMenuItems}
          onClick={() => {
            handleMenu(false);
            scrollTo(0, 0);
            setVideoOpen(true);
          }}
        >
          {menuItems[1].text}
        </motion.div>
        <Link
          activeClass="active"
          className="link"
          to="cta"
          spy={true}
          smooth={true}
          duration={500}
        >
          <motion.div
            className="menu-item"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={variantsMenuItems}
            onClick={() => handleClick()}
          >
            {menuItems[2].text}
          </motion.div>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
        >
          <motion.div
            className="menu-item"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={variantsMenuItems}
            onClick={() => handleClick()}
          >
            {menuItems[3].text}
          </motion.div>
        </Link>
        <Link
          activeClass="active"
          className="link"
          to="foundation"
          spy={true}
          smooth={true}
          duration={500}
        >
          <motion.div
            className="menu-item"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={variantsMenuItems}
            onClick={() => handleClick()}
          >
            {menuItems[4].text}
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Menu;
