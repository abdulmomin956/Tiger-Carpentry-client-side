import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner';

const MyOrders = ({ user }) => {
    console.log(user);
    const myOrders = useQuery('myOrder', () => fetch(`http://localhost:5000/orders/${user.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    const navigate = useNavigate();

    if (myOrders.isLoading) {
        return <LoadSpinner></LoadSpinner>
    }

    const handleCancel = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                myOrders.refetch();
            })
    }
    console.log(myOrders);
    return (
        <div className="overflow-x-auto w-full border">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Name</th>
                        <th>Rate</th>
                        <th>Ordered QTY</th>
                        <th>Total</th>
                        <th>Payment status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myOrders.data.map((p, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{p.productName}</td>
                                <th>{p.rate} $</th>
                                <th>{p.orderQty}</th>
                                <th>{p.orderQty * p.rate}$</th>
                                <td>{
                                    !p.paid ? <button onClick={() => navigate(`/payment/${p._id}`)} className='btn btn-primary'>Proceed to pay</button>
                                        :
                                        <p className='text-green-500 font-bold text-center'>{p.paid}</p>
                                }
                                </td>
                                <td>{
                                    !p.paid ? <button onClick={() => handleCancel(p._id)} className='btn btn-primary'>Cancel</button> : <p>TRXN ID: <span className='text-green-500 font-bold'>{p?.transactionId}</span></p>
                                }</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;