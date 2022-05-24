import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile border-2">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/add-review'>Add A Review</Link></li>
                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/add-product'>Add A Product</Link></li>
                    <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
                    <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;