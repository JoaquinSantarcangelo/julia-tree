import React, { useState } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const DonateForm = ({ setDonateOpen }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [payment, setPayment] = useState("stripe");
  const [quantity, setQuantity] = useState(1);
  const [subscription, setSubscription] = useState(false);

  //Form Validation
  const validation = () => {
    let validated = true;

    console.log(subscription);

    //Code
    if(from.trim() === '' || to.trim() === '' || message.trim() === '' || payment.trim() === '' || quantity < 1){
      validated = false;
    }
    
    return validated;
  };

  const handleSubmit = () => {
    if (validation()) {
      alert(`${from},${to},${message}`);
      setDonateOpen(false);
    }else{
      alert('All form fields must be completed');
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
          <div className="quantity">
            <div className="text">I want to plant</div>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
            />
            <div className="text">Julia Trees</div>
          </div>
          <div className="from-to">
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              id="from"
              placeholder="From"
              type="text"
            />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              id="to"
              placeholder="To"
              type="text"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            name="message"
            id="message"
          ></textarea>
          <div>
            <input type="checkbox"
              name="subscription"
              id="subscription"
              onChange={(e) => setSubscription(!subscription)}
            /> I want to Subscribe
          </div>
          <div className="payment">
            <div className="label">Select your payment</div>
            <div className="selector">
              <div
                onClick={() => setPayment("stripe")}
                className={payment === "stripe" ? "item active" : "item"}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/stripe.svg"
                  alt=""
                />
              </div>
              <div
                onClick={() => setPayment("paypal")}
                className={payment === "paypal" ? "item active" : "item"}
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div onClick={() => handleSubmit()} className="button">
            Donate
          </div>
        </div>
      </div>
      <motion.div
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(8px)" }}
        exit={{
          backdropFilter: "blur(0px)",
          transition: { delay: 0, duration: 1 },
        }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="overlay"
      ></motion.div>
    </motion.div>
  );
};

export default DonateForm;
