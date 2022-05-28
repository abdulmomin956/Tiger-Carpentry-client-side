import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';


const AddReview = ({ user }) => {
    const { register, handleSubmit, reset } = useForm();
    // console.log(user);
    const onSubmit = async data => {
        console.log(data);
        const review = {
            rating: data.rating,
            short: data.short,
            name: user.displayName
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.acknowledged) {
                    toast.success('You have posted a review!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    reset();
                }
            })

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full md:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Write A Review</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body bg-base-200">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <select required {...register("rating")} defaultValue={''} className="select w-full max-w-xs">
                                <option disabled value="">Out of 5</option>
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
                            <ToastContainer position="top-center"
                                autoClose={5000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddReview;