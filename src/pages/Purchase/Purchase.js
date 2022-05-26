import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = ({ user }) => {
    const { id } = useParams();
    console.log(id);
    const singlePrData = useQuery('singleProduct', () => fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
    )

    console.log(singlePrData);
    const { name, short, price, minOrder, availableQty, image } = singlePrData.data;
    console.log(user.displayName);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col ">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Purchase the Product</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div className="form-control">
                            <img src={image} alt="" />
                        </div>
                        <div class="form-control">

                            <h1 class="card-title" >{name}</h1>
                            <h1 class="" >{short}</h1>
                            <h1 class="" >Price {price} per piece</h1>
                            <h1 class="" >Minimum Order: {minOrder} pcs</h1>
                            <h1 class="" >Available: {availableQty} pcs</h1>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" value={user.displayName} disabled class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input type="text" value={user.email} disabled class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input type="number" min={minOrder} max={availableQty} required placeholder={minOrder} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Full Address</span>
                            </label>
                            <input type="text" required placeholder='Full Address' class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Place the Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;