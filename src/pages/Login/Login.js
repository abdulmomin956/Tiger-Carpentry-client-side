import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import LoadSpinner from '../shared/LoadSpinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, handleSubmit, getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const [token] = useToken(user)

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token])
    if (loading || sending) {
        return <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }

    const onSubmit = async data => {

        await signInWithEmailAndPassword(data.email, data.password);

    };


    let signInError;
    if (error || resetError) {
        signInError = <p className='text-red-500'><small>{error?.message || resetError?.message}</small></p>
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full md:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button type='button' onClick={async () => {
                                    const values = getValues('email');
                                    await sendPasswordResetEmail(values);
                                    alert('Sent email');
                                }} className="text-primary  link-hover">Forgot password?</button>
                            </label>
                        </div>
                        {
                            signInError
                        }
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <div className='card-body pt-0'>
                        <div className="form-control">
                            <div className="divider">Or</div>
                            <SocialLogin>Sign In with</SocialLogin>
                            <label className="label">
                                <p>Need an account? <Link to='/register' className="text-primary link link-hover">Sign Up</Link></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;