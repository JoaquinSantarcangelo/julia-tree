import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";
import { ClickAwayListener } from "@material-ui/core";

import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe(
  'pk_test_51IIvlAB5HIQWMe8gmTN2V6rC7XgwnhwnMiv8kI48BYDXtoRG20eRuRXskTLm5alzJiIZkIRrjh4rFzoIXuZljOjO00tXlqqsas'
);

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

  const donation_value = 1;

  //Form Validation
  const validation = () => {
    let validated = true;

    console.log(subscription);

    //Code
    if (
      from.trim() === "" ||
      to.trim() === "" ||
      message.trim() === "" ||
      payment.trim() === "" ||
      quantity < 1
    ) {
      validated = false;
    }

    return validated;
  };

  const handleStipePayment = async () => {
    
    // Get Stripe.js instance
    const stripe = await stripePromise;

    let url = (subscription) ? 'http://localhost:4000/api/stripe/donation-sub' : 'http://localhost:4000/api/stripe/donation'

    // Call your backend to create the Checkout Session
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        donation_amount: donation_value,
        quantity: quantity
      })
    })
    .catch(error => console.log(error))

    const session = await response.json();

    console.log(session)

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  useEffect(() => {
    /*window.paypal.Button.render({
      env: 'sandbox', // Or 'production'
      // Set up the payment:
      // 1. Add a payment callback
      payment: function(data, actions) {
        // 2. Make a request to your server
        return actions.request.post('/my-api/create-payment/')
          .then(function(res) {
            // 3. Return res.id from the response
            return res.id;
          });
      },
      // Execute the payment:
      // 1. Add an onAuthorize callback
      onAuthorize: function(data, actions) {
        // 2. Make a request to your server
        return actions.request.post('/my-api/execute-payment/', {
          paymentID: data.paymentID,
          payerID:   data.payerID
        })
          .then(function(res) {
            // 3. Show the buyer a confirmation message.
          });
      }
    }, '#paypal-button');*/
  }, [])

  const handlePaypalPayment = async () => {
    let url = 'http://localhost:4000/api/paypal/create-payment';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value: donation_value,
        amount: quantity
      })
    })
    .catch(error => console.log(error))

    console.log(response)
  }

  const handleSubmit = () => {
    if (validation()) {
      if(payment === 'paypal'){
        handlePaypalPayment();
      }else if(payment === 'stripe'){
        handleStipePayment();
      }
      alert(`${from},${to},${message}`);
      setDonateOpen(false);
    } else {
      alert("All form fields must be completed");
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
      <ClickAwayListener onClickAway={() => setDonateOpen(false)}>
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

            <div className="payment">
              {/* <div className="label">Select your payment</div> */}
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
                  id="paypal-button"
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
            <div className="subscription">
              <input
                type="checkbox"
                name="subscription"
                id="subscription"
                onChange={(e) => setSubscription(!subscription)}
              />{" "}
              Monthly subscription
            </div>
            <div onClick={() => handleSubmit()} className="button">
              Donate
            </div>
          </div>
        </div>
      </ClickAwayListener>
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
