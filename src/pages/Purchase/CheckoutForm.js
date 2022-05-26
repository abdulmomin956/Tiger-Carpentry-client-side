import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ name, email, rate, orderQty, id }) => {
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')

    const totalAmount = rate * orderQty;
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalAmount }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [totalAmount]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }
        const card = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setError(error?.message || '');

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError?.message)
        }
        else {
            setError('')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('Congrats! your payment completed')

        }
    };
    if (success) {
        fetch(`http://localhost:5000/order/transaction/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ transactionId })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className='border p-3 rounded-md' />
                <button disabled={!stripe || !clientSecret} className='btn btn-primary text-white mt-4' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
            {
                error && <div className='text-red-500'>{error}</div>
            }
            {
                success && <div className='text-green-500'>
                    <p className='font-bold'>{success}</p>
                    <p className='font-bold'>Your Transaction ID: <span className='text-orange-500'>{transactionId}</span></p>
                </div>
            }
        </>

    );
};

export default CheckoutForm;