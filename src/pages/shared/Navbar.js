import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navmenu = <>
        <li><a>Home</a></li>
        <li><a>Add</a></li>
        <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link>
    </>

    return (
        <div className="navbar bg-zinc-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navmenu}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Content Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navmenu}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;