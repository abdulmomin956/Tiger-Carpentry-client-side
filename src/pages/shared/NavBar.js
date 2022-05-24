import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
import { signOut } from 'firebase/auth';

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        {
            !user ?
                <li><Link to='/login'>Login</Link></li> :
                <li><p onClick={() => signOut(auth)}>Log Out</p></li>
        }

    </>
    // const dropMenu = <>
    //     <li tabIndex="0">
    //         <a className="justify-between">
    //             Parent
    //             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
    //         </a>
    //         <ul className="p-2">
    //             {menuItem}
    //         </ul>
    //     </li>
    // </>
    return (
        <div className="navbar bg-base-100 w-full lg:px-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/'><img className='w-1/3' src={logo} alt="Home" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="my-drawer-2" className=" bg-white   lg:hidden">

                    <svg className=" fill-secondary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default NavBar;