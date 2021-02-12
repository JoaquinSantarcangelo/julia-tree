import React, { useState } from "react";
import { motion } from "framer-motion";
import { ClickAwayListener } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { loadStripe } from "@stripe/stripe-js";

//pk_live_51IIvlAB5HIQWMe8gOCrg7LER7S9rQsQL7ND19VXKfYpktJotBtXPHGpW4MhdBL3qeZ55c1IFh4L6lpbGyh6Qn0dm00MDxKyfPX
const stripePromise = loadStripe(
  'pk_test_51IIvlAB5HIQWMe8gmTN2V6rC7XgwnhwnMiv8kI48BYDXtoRG20eRuRXskTLm5alzJiIZkIRrjh4rFzoIXuZljOjO00tXlqqsas'
);

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: "easeInOut", when: "beforeChildren", duration: 0.6 },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const DonateForm = ({ setDonateOpen, formState, setFormState }) => {
  const donation_value = 10;

  const { quantity, from, to, message } = formState;

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
    
    let url = formState.subscription
      ? "https://the-julia-tree-api.herokuapp.com/api/stripe/donation-sub"
      : "https://the-julia-tree-api.herokuapp.com/api/stripe/donation";
    
  /*ESTE
    let url = formState.subscription
      ? "https://the-julia-tree-api.herokuapp.com/api/stripe/donation-sub"
      : "https://the-julia-tree-api.herokuapp.com/api/stripe/donation";
*/
/*
    let url = formState.subscription
      ? "https://api.thejuliatree.org/api/stripe/donation-sub"
      : "https://api.thejuliatree.org/api/stripe/donation";
      */
    // Call your backend to create the Checkout Session
    //application/json

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        donation_amount: donation_value,
        quantity: quantity,
        from: from,
        to: to,
        message: message,
      }),
    }).catch((error) => console.log(error));

    const session = await response.json();

    sessionStorage.setItem("data", JSON.stringify(formState));

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert("Ups! There was an error! Try later");
    }
  };

  const handleSubmit = () => {
    if (validation()) {
      handleStripePayment();

      setDonateOpen(false);
    } else {
      //no completo el formulario
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
              onChange={(e) => {
                if (message.length < 300) {
                  setFormState({ ...formState, message: e.target.value });
                }
              }}
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
