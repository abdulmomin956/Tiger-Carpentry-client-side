import React from 'react';
import { useQuery } from 'react-query';
import LoadSpinner from '../shared/LoadSpinner';

const ManageOrders = () => {
    const allOrders = useQuery('allOrder', () => fetch('https://tiger-carpentry-server-side-production.up.railway.app/all-orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (allOrders.isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }



    const handleShipping = id => {
        fetch(`https://tiger-carpentry-server-side-production.up.railway.app/all-orders/${id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result?.acknowledged) {
                    allOrders.refetch();
                }

            })
    }

    return (
        <div className="overflow-x-auto w-full border">
            <div>
                <h1 className=' text-4xl text-center font-bold uppercase'>Manage All Orders</h1>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Name</th>
                        <th className='w-5'>Product</th>
                        <th>Ordered QTY</th>
                        <th>Total</th>
                        <th>Payment status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allOrders.data.map((p, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <th>{p.productName} </th>
                                <th>{p.orderQty}</th>
                                <th>{p.orderQty * p.rate}$</th>
                                <td>{
                                    !p.paid ? ''
                                        :
                                        <p className='text-green-500 font-bold text-center'>{p.paid}</p>
                                }
                                </td>
                                <td>{
                                    p.paid === 'pending' ? <button onClick={() => handleShipping(p._id)} className='btn btn-primary'>Ship Now</button> : ''
                                }</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;