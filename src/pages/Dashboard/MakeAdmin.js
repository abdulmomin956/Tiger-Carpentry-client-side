import React from 'react';
import { useQuery } from 'react-query';
import LoadSpinner from '../shared/LoadSpinner';

const MakeAdmin = () => {
    const { isLoading, error, data, refetch } = useQuery('users', () =>
        fetch('https://secure-harbor-92010.herokuapp.com/users', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) return <div className='h-screen flex justify-center items-center'>
        <LoadSpinner></LoadSpinner>
    </div>

    const handleAdmin = email => {
        fetch(`https://secure-harbor-92010.herokuapp.com/users/${email}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                refetch()
                console.log(result)
            })
    }

    const handleDelete = email => {
        fetch(`https://secure-harbor-92010.herokuapp.com/users/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    refetch();
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full border">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>S/L</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((user, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{
                                    !user.role && <button onClick={() => handleAdmin(user.email)} className='btn btn-primary'>Make Admin</button>
                                }</td>
                                <td><button onClick={() => handleDelete(user.email)} className='btn btn-primary'>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;