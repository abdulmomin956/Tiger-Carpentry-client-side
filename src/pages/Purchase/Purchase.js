import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner';
import PlacedSuccess from './PlacedSuccess';

const Purchase = ({ user, userDat }) => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    // console.log(id);
    const singlePrData = useQuery('singleProduct', () => fetch(`https://secure-harbor-92010.herokuapp.com/products/${id}`)
        .then(res => res.json())
    )
    // let navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    if (singlePrData.isLoading) {
        return <LoadSpinner></LoadSpinner>
    }

    // console.log(singlePrData);
    const { name, short, price, minOrder, availableQty, image } = singlePrData.data;
    // console.log(user.displayName);


    const onSubmit = async data => {
        const order = {
            productImg: image,
            orderQty: data.orderQty,
            rate: price,
            productName: name,
            name: user.displayName,
            email: user.email,
            address: data.address,
            phone: data.phone
        }
        // console.log(order);
        fetch('https://secure-harbor-92010.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.acknowledged) {
                    const upQty = { availableQty: availableQty - data.orderQty }
                    fetch(`http://localhost:5000/products/${id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(upQty)
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result);
                            if (result.acknowledged) {
                                reset();
                                setSuccess(true);
                            }

                        })

                }
            })
    };
    if (success) {
        return <PlacedSuccess success={success} props='purchase'></PlacedSuccess>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Purchase the Product</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <img src={image} alt="" />
                        </div>
                        <div className="form-control">

                            <h1 className="card-title" >{name}</h1>
                            <h1 className="" >{short}</h1>
                            <h1 className="" >Price {price} per piece</h1>
                            <h1 className="" >Minimum Order: {minOrder} pcs</h1>
                            <h1 className="" >Available: {availableQty} pcs</h1>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input {...register("orderQty")} type="number" min={minOrder} max={availableQty} required defaultValue={minOrder} className="input input-bordered" />
                        </div>
                        <div className="divider">YOUR INFORMATION</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" value={user.displayName} disabled className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register("email")} type="text" value={user.email} disabled className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Address</span>
                            </label>
                            <input {...register("address")} type="text" required placeholder='Full Address' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input {...register("phone")} type="text" required placeholder='Phone Number' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={userDat?.data?.role} className="btn btn-primary">{userDat?.data?.role ? "You are an admin" : 'Place the Order'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;