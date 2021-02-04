import React, { useState } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";

const variants = {
  visible: { y: 0 },
  hidden: { y: "-100vh" },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
};

const DonateForm = ({ setDonateOpen }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  //Form Validation
  const validation = () => {
    const validated = true;
    //Code
    return validated;
  };

  const handleSubmit = () => {
    if (validation) {
      alert(`${from},${to},${message}`);
      setDonateOpen(false);
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="donate-form"
    >
      <div className="wrapper">
        <div onClick={() => setDonateOpen(false)} className="close-icon">
          <CloseIcon />
        </div>
        <div className="title">
          Julia Trees invite us to write our own story of love
        </div>
        <div className="form">
          <div className="payment">
            <input type="number" name="number" id="number" />
            <div className="sub">
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            id="from"
            placeholder="From:"
            type="text"
          />
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            id="to"
            placeholder="To:"
            type="text"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            name="message"
            id="message"
          ></textarea>
          <div onClick={() => handleSubmit()} className="button">
            Sending
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DonateForm;
