import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';

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

    return (

        <button onClick={handleSignUp} className="btn btn-outline btn-primary">{children} Google</button>

    );
};

export default SocialLogin;