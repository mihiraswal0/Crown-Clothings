import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { FormContainer } from './payment-form.styles';
import {BUTTON_TYPE_CLASS} from '../button/button.componet'
import {  PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
 

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      console.log("no");
      return ;
    }
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount:100 }),
    }).then((res) => {
      return res.json();
    });
    const {
        paymentIntent:{client_secret},
    }=response;

    

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Mihir Aswal',
        },
      },
    });


    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer >
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <button onClick={paymentHandler}>Pay Now</button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;