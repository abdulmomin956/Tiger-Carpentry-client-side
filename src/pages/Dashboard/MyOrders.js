import React from 'react';
import { useQuery } from 'react-query';
import LoadSpinner from '../shared/LoadSpinner';

const MyOrders = ({ user }) => {
    console.log(user);
    const myOrders = useQuery('myOrder', () => fetch(`http://localhost:5000/orders/${user.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (myOrders.isLoading) {
        return <LoadSpinner></LoadSpinner>
    }
    console.log(myOrders);
    return (
        <div>
            <h1>My orders</h1>
        </div>
    );
};

export default MyOrders;