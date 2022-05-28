import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyProfile = ({ user }) => {
    const navigate = useNavigate()
    return (
        <div className='   min-h-screen'>
            <div className="  w-full  "><div className=" lg:text-left">
                <h1 className="text-4xl text-center font-bold">My Profile</h1>
            </div>
                <div className="text-center">
                    <hr />
                    <h1 className='text-3xl '>Name: {user.displayName}</h1>
                    <h1 className=' '>Email: {user.email}</h1>
                </div>
                <button onClick={() => navigate('/edit-profile')} className='btn btn-primary'>Edit</button>
            </div>

        </div>
    );
};

export default MyProfile;