import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import LoadSpinner from '../shared/LoadSpinner';

const SocialLogin = ({ children }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token])
    const handleSignUp = async () => {
        await signInWithGoogle()
    }

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }

    let signInError;
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    return (

        <>
            <button onClick={handleSignUp} className="btn btn-outline btn-primary">{children} Google</button>
            {
                signInError
            }
        </>

    );
};

export default SocialLogin;