import React from 'react';
import { useQuery } from 'react-query';
import LoadSpinner from '../shared/LoadSpinner';

const MakeAdmin = () => {
    const { isLoading, error, data } = useQuery('users', () =>
        fetch('http://localhost:5000/users').then(res =>
            res.json()
        )
    )
    if (isLoading) return <LoadSpinner></LoadSpinner>
    console.log(data);
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((user, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;