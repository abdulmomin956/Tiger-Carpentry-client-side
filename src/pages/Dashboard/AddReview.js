import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full md:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Write A Review</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body bg-neutral">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <select class="select w-full max-w-xs">
                                <option disabled selected>Out of 5</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Short Description</span>
                            </label>
                            <textarea {...register("short")} type="text" placeholder="Short Description" className="input input-bordered h-24 p-3 border rounded-lg" />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddReview;