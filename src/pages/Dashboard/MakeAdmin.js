import React from 'react';
import { useQuery } from 'react-query';
import LoadSpinner from '../shared/LoadSpinner';
import NotFound from '../shared/NotFound';
import RequireAdmin from '../shared/RequireAdmin';

const MakeAdmin = () => {
    const { isLoading, error, data, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users').then(res =>
            res.json()
        )
    )
    if (isLoading) return <div className='h-screen flex justify-center items-center'>
        <LoadSpinner></LoadSpinner>
    </div>

    const handleAdmin = email => {
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(result => {
                refetch()
                console.log(result)
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
                                <td><button className='btn btn-primary'>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;