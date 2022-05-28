import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3fuvHSxiZtopDfjlCU7k042fqPyTli9P61zXAztaKua49YXqsTo1nQ2FhLOs6RohzcFfjB5ygCxoIlyZfExyzZ00pEuT8hL9');

const Payment = ({ user }) => {
    const { id } = useParams();
    const order = useQuery('order', () => fetch(`https://secure-harbor-92010.herokuapp.com/orders/search/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (order.isLoading) {
        return <LoadSpinner></LoadSpinner>
    }
    const { name, productName, rate, orderQty, email } = order.data;


    const appearance = {
        theme: 'stripe',
    };
    const options = {
        appearance,
    };

    return (
        <div className='hero h-screen'>
            <div className="card bg-base-100 p-6">

                <div className="card-body">
                    <h1 className='text-5xl'>Hi {user.displayName}</h1>
                    <p className='text-2xl'>Your Order Contains:</p><hr />
                    <p>Products: <span className='font-bold'>{productName}</span></p><hr />
                    <p>Price Rate: <span className='font-bold'>{rate}$ per piece</span></p><hr />
                    <p>Order Quatity: <span className='font-bold'>{orderQty} pieces</span></p><hr />
                    <p>Total: <span className='font-bold'>{orderQty * rate} $</span></p><hr />
                    <div className='divider text-2xl'>Payment Details</div>
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm orderQty={orderQty} rate={rate} name={name} email={email} id={id} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;