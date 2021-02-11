import React, { useState } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@material-ui/icons/Close";
import { ClickAwayListener } from "@material-ui/core";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51IIvlAB5HIQWMe8gmTN2V6rC7XgwnhwnMiv8kI48BYDXtoRG20eRuRXskTLm5alzJiIZkIRrjh4rFzoIXuZljOjO00tXlqqsas"
);

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const DonateForm = ({ setDonateOpen, formState, setFormState }) => {
  const donation_value = 10;

  //Form Validation
  const validation = () => {
    let validated = true;

    //Code
    if (
      formState.from.trim() === "" ||
      formState.to.trim() === "" ||
      formState.message.trim() === "" ||
      formState.quantity < 1
    ) {
      validated = false;
    }

    return validated;
  };

  const handleStripePayment = async () => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
/*
    let url = formState.subscription
      ? "http://localhost:4000/api/stripe/donation"
      : "http://localhost:4000/api/stripe/donation"
*/

    let url = formState.subscription
      ? "http://juliatreeserverapi-env.eba-bmujhgcs.us-east-1.elasticbeanstalk.com/api/stripe/donation-sub"
      : "http://juliatreeserverapi-env.eba-bmujhgcs.us-east-1.elasticbeanstalk.com/api/stripe/donation";

    // Call your backend to create the Checkout Session
    //application/json
    const response = await fetch(url, {
      method: "POST",
      header:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        donation_amount: donation_value,
        quantity: formState.quantity,
      })
    }).catch((error) => console.log(error));

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(result)

    if (result.error) {
      alert("Ups! There was an error! Try later");
    }
  };

  const handleSubmit = () => {
    if (validation()) {
      
      handleStripePayment();

      alert(`${formState.from},${formState.to},${formState.message}`);
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
                onChange={(e) =>
                  setFormState({ ...formState, quantity: e.target.value })
                }
                type="number"
                name="quantity"
                id="quantity"
                value={formState.quantity}
              />
              <div className="text">Julia Trees</div>
            </div>
            <div className="from-to">
              <input
                value={formState.from}
                onChange={(e) =>
                  setFormState({ ...formState, from: e.target.value })
                }
                id="from"
                placeholder="From"
                type="text"
              />
              <input
                value={formState.to}
                onChange={(e) =>
                  setFormState({ ...formState, to: e.target.value })
                }
                id="to"
                placeholder="To"
                type="text"
              />
            </div>
            <textarea
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              placeholder="Message"
              name="message"
              id="message"
            ></textarea>

            <div className="subscription">
              <input
                type="checkbox"
                name="subscription"
                id="subscription"
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    subscription: !formState.subscription,
                  })
                }
              />{" "}
              Monthly subscription
            </div>
            <div onClick={() => handleSubmit()} className="button">
              Donate
            </div>
            <div className="payment">
              powered by
              <img
                src="https://cdn.worldvectorlogo.com/logos/stripe.svg"
                alt=""
              />
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
