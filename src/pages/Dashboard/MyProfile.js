import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner';

const MyProfile = ({ user }) => {
    const navigate = useNavigate()
    const userDetail = useQuery(['userDetail', user?.email], () => fetch(`https://secure-harbor-92010.herokuapp.com/userDetail/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (userDetail.isLoading) {
        <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }

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
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">

                        <tbody>
                            <tr>
                                <td>Phone</td>
                                <td>:</td>
                                <td>{
                                    userDetail?.data?.mobile || "---"
                                }</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td>{
                                    userDetail?.data?.address || "---"
                                }</td>
                            </tr>
                            <tr className=' font-bold'><td className='bg-transparent'>Your Educational Qualification</td></tr>
                            <tr>
                                <td>Education Level</td>
                                <td>:</td>
                                <td>{
                                    userDetail?.data?.level || "---"
                                }</td>
                            </tr>
                            <tr>
                                <td>Degree Title</td>
                                <td>:</td>
                                <td>{
                                    userDetail?.data?.degree || "---"
                                }</td>
                            </tr>
                            <tr>
                                <td>Institute</td>
                                <td>:</td>
                                <td>{
                                    userDetail?.data?.institute || "---"
                                }</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>:</td>
                                <td>{
                                    userDetail?.data?.year || "---"
                                }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button onClick={() => navigate('/edit-profile')} className='btn btn-primary mt-5'>Edit</button>
            </div>

        </div>
    );
};

export default MyProfile;