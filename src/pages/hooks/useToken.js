import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('')
    console.log(user);
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://tiger-carpentry-server-side-production.up.railway.app/users/${email}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const accessToken = data.access;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user])

    return [token]
};

export default useToken;