import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-44 bg-base-100 text-base-content flex justify-between">
                    {/* <!-- Sidebar content here --> */}
                    <div>
                        <Link to={'/dashboard'}> <li><a>Add Product</a></li></Link>
                        <Link to={'/dashboard/update-product/id'}> <li><a>Update Product</a></li></Link>
                    </div>
                    <Link to='/'> <button className='btn btn-sm bg-green-300 text-black border-none'>Back To Home</button></Link>
                </ul>

            </div>
            <div>
            </div>
        </div>
    );
};

export default Sidebar;