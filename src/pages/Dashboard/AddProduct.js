import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [err, setErr] = useState('')
    const onSubmit = async data => {
        // for img upload
        const formData = new FormData();
        formData.append('image', data.image[0]);
        await fetch('https://api.imgbb.com/1/upload?key=31f7cb9f34e2ffbef2d717a4a4236371', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        short: data.short,
                        minOrder: data.minOrder,
                        availableQty: data.availableQty,
                        price: data.price,
                        image: img

                    }
                    fetch('https://secure-harbor-92010.herokuapp.com/products', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                        ,
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            reset();
                        })
                }
                else {
                    setErr('Please select a valid image file')
                }

            })


        // console.log(data.image[0].name);
        //mongodb post

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full md:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add A Product</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Product Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea {...register("short")} type="text" placeholder="Short Description" className="input input-bordered h-24 p-3 border rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input {...register("minOrder")} type="number" placeholder="Minimum Order" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input {...register("availableQty")} type="number" placeholder="Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Unit Price</span>
                            </label>
                            <input {...register("price")} type="number" placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input  {...register("image")} type="file" accept=".png, .jpg, .jpeg"
                                className="
                                input input-bordered block
                                w-full
                                px-2
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>
                        {
                            err ? <label className="label">
                                <span className="label-text text-red-600">{err}</span>
                            </label> : ''
                        }
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddProduct;