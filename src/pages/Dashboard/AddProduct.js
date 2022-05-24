import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        // await createUserWithEmailAndPassword(data.email, data.password);
        // await updateProfile({ displayName: data.name });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col w-full md:w-1/2">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Add A Product</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Product Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Product Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Short Description</span>
                            </label>
                            <textarea {...register("short")} type="text" placeholder="Short Description" class="input input-bordered h-24 p-3 border rounded-lg" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimum Order</span>
                            </label>
                            <input {...register("minOrder")} type="number" placeholder="Minimum Order" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input {...register("availableQty")} type="number" placeholder="Quantity" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Unit Price</span>
                            </label>
                            <input {...register("price")} type="number" placeholder="price" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Image</span>
                            </label>
                            <input  {...register("image")} type="file" accept=".png, .jpg, .jpeg"
                                class="
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
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddProduct;