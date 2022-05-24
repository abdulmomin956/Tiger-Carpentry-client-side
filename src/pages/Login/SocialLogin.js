import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = ({ children }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (

        <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary">{children} Google</button>

    );
};

export default SocialLogin;