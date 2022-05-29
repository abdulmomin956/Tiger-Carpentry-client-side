import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import LoadSpinner from '../shared/LoadSpinner';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token])

    const [updateProfile, updating, upError] = useUpdateProfile(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    };

    if (loading || updating) {
        return <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }
    let signInError;
    if (error || upError) {
        signInError = <p className='text-red-500'><small>{error?.message || upError?.message}</small></p>
    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full md:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} type="text" placeholder="name" className="input input-bordered" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} type="email" placeholder="email" className="input input-bordered" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                {errors.password?.type === 'minLenth' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                            </label>
                        </div>
                        {
                            signInError
                        }
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className="card-body pt-0">
                        <div className="form-control">
                            <div className="divider">Or</div>
                            <SocialLogin>Continue With</SocialLogin>
                            <label className="label">
                                <p>Have an account? <Link to='/login' className="text-primary link link-hover">Login</Link></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;