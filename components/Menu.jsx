import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    text: "Home",
    href: "",
  },
  {
    text: "Video",
    href: "",
  },
  {
    text: "Fundacion",
    href: "",
  },
  {
    text: "Donar",
    href: "",
  },
];

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

const Menu = () => {
  return (
    <motion.div
      variants={menuVariants}
      exit="hidden"
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", when: "beforeChildren", duration: 0.4 }}
      className="menu"
    >
      <div className="wrapper">
        {menuItems.map((item, i) => (
          <motion.div
            className="menu-item"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variantsMenuItems}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
