import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCard from './SimpleCard';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CardPayment = () => {

    return (
        <Elements stripe={stripePromise}>
            <SimpleCard></SimpleCard>
        </Elements>
    );
};

export default CardPayment;