import React from 'react';
import { useQuery } from 'react-query';
import LoadSpinner from '../shared/LoadSpinner';

const ManageProducts = () => {
    const allProducts = useQuery('allOrder', () => fetch('https://tiger-carpentry-server-side-production.up.railway.app/all-products', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (allProducts.isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }

    const handleDelete = id => {
        fetch(`https://tiger-carpentry-server-side-production.up.railway.app/all-products/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    allProducts.refetch()
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full border">
            <div>
                <h1 className=' text-4xl text-center font-bold uppercase'>Manage Products</h1>
            </div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Image</th>
                        <th className='w-3'>Product</th>
                        <th>Unit Price</th>
                        <th>Available</th>
                        <th>Minimum Order</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allProducts.data.map((p, index) =>

                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img className='h-7' src={p.image} alt="" /></td>
                                <th>{p.name} </th>
                                <th>{p.price}$</th>
                                <th>{p.availableQty} pcs</th>
                                <th>{p.minOrder} pcs</th>
                                <th><label htmlFor="my-modal-3" className="btn modal-button">Delete</label></th>

                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">Are you sure want to delete {p.name}?</h3>
                                        <p className="py-4">If you delete, it will remove from database parmanently!</p>
                                        <div className="modal-action">
                                            <label onClick={() => handleDelete(p._id)} htmlFor="my-modal-3" className='btn bg-red-500 text-white'>Delete</label>
                                        </div>
                                    </div>
                                </div>
                            </tr>


                        )
                    }
                </tbody>
            </table>


        </div>
    );
};

export default ManageProducts;