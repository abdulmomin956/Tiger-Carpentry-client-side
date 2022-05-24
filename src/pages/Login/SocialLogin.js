import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = ({ children }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleSignUp = async () => {
        await signInWithGoogle()

    }
    if (user) {
        fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user.user.email })
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (

        <button onClick={handleSignUp} className="btn btn-outline btn-primary">{children} Google</button>

    );
};

export default SocialLogin;