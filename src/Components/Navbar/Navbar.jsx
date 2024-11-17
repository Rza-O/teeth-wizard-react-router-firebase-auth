import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='min-h-20 bg-blue-500 flex justify-between items-center px-4 text-white'>
            <div>
                <h1 className='text-2xl font-extrabold'>Teeth Wizard</h1>
            </div>
            <div className='space-x-3'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/allTreatments'>All Treatments</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/appointments'>Appointment</NavLink>
            </div>
            <div>
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;