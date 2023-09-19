import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../Redux/cartSlice";



export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useSelector(getTotalPrice)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: 999,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="payContainer">
      
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <div className="form">
      <input type="text" placeholder="Your first name"/>
      <input type="text" placeholder="Your last name"/>
      <input type="email" placeholder="Your e-mail"/>
      <input type="tel" placeholder="Your phone"/>
      <input type="text" placeholder="Country"/>
      <input type="text" placeholder="City"/>
      <input type="text" placeholder="Street"/>
      <input type="number" placeholder="House number"/>
      <input type="number" placeholder="Index"/>
      </div>
      <p>Subtotal: {totalPrice}$</p>
      <CardElement />
      <button className="checkoutBtn">Pay</button>
    </form>
    </div>
  );
};