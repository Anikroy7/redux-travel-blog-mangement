import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex w-full p-3'>
            <Sidebar />
            {/* <div className='w-full bg-gray-100 rounded-lg'>
                <Outlet />
            </div> */}
        </div>
    );
};

export default Dashboard;