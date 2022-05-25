import React from 'react';
import NotFound from './NotFound';

const RequireAdmin = ({ userDat, children }) => {


    // if (fireDat.loading || userDat.isLoading) {
    //     return <div className='h-screen flex justify-center items-center'>
    //         <LoadSpinner></LoadSpinner>
    //     </div>
    // }


    const { role } = userDat.data;
    if (role !== 'admin') {
        return <NotFound></NotFound>
    }

    return children
};

export default RequireAdmin;