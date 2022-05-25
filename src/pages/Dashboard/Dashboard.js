import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner';

const Dashboard = ({ userData }) => {
    console.log(userData);

    // const { userDat } = props;
    if (userData?.isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <LoadSpinner></LoadSpinner>
        </div>
    }
    // console.log(userData.data);
    return (
        <div className="drawer drawer-mobile border-2">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !userData?.data?.role ?
                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/add-review'>Add A Review</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/dashboard'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/add-product'>Add A Product</Link></li>
                                <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                                <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                            </>
                    }


                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;