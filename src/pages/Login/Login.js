import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col w-full md:w-1/2">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="text-primary link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control">
                            <div className="divider">Or</div>
                            <SocialLogin>Sign In with</SocialLogin>
                            <label class="label">
                                <p>Need an account? <Link to='/register' class="text-primary link link-hover">Sign Up</Link></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;