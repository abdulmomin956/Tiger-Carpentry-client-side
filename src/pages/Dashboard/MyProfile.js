import React from 'react';

const MyProfile = ({ user }) => {
    return (
        <div className='   min-h-screen'>
            <div className="  w-full  "><div className=" lg:text-left">
                <h1 className="text-4xl text-center font-bold">My Profile</h1>
            </div>
                <div className="text-center">
                    <hr />
                    <h1 className='text-3xl '>Name: {user.displayName}</h1>
                    <h1 className=' '>Email: {user.email}</h1>
                </div></div>

        </div>
    );
};

export default MyProfile;