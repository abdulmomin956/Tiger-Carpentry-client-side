import React from 'react';
import NotFound from './NotFound';

const RequireAdmin = ({ userDat, children }) => {

    const { role } = userDat.data;
    if (role !== 'admin') {
        return <NotFound></NotFound>
    }

    return children
};

export default RequireAdmin;