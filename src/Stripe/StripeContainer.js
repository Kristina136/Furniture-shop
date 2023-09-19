import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";


const PUBLIC_KEY = "pk_test_51NnIdHAPOHtuDd9ye5xiO0k8wsf8pUnV29SqcVlAZYVRFSEYKiPplTyDqCS8eiOtZ44lugTiWX3az32i9mFJByFg001nCHhc6t";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm/>
    </Elements>
  );
};

export default StripeContainer;