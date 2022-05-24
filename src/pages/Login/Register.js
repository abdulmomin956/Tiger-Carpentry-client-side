import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, upError] = useUpdateProfile(auth);


    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col w-full md:w-1/2">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Sign Up</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="form-control">
                            <div className="divider">Or</div>
                            <SocialLogin>Continue With</SocialLogin>
                            <label class="label">
                                <p>Have an account? <Link to='/login' class="text-primary link link-hover">Login</Link></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;