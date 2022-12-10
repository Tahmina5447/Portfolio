import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Images/tahmina.jpg'
const Navbar = () => {
    return (
        <div className=' px-12'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className='flex'>
                        {/* <img src={logo} alt="" className='w-12 h-12' /> */}
                        <Link to='/' className="h-12 w-12 py-2"><img className='rounded-full ring ring-blue-700' src={img} alt="logo" /></Link>
                        <Link className='text-xl text-blue-700 ml-2  mt-4 font-bold' to='/'>Portfolio</Link>
                    </div>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-blue-700 dropdown-content mt-3 shadow bg-base-100 w-48">
                            <li><Link >Home</Link></li>
                            <li><Link >Contact Me</Link></li>
                            <li><button className=' mt-2 '><a target='_blank' href="https://drive.google.com/file/d/15zzYQVTvk7qIQRaq3u_SqP6U0f9tpvsd/view?usp=share_link">Resume</a></button></li>


                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-blue-700 ">
                        <li><Link >Home</Link></li>
                        <li><a href="/contact">Contact Me</a></li>
                        <li><button className='btn-sm border border-blue-700 mt-2 '><a target='_blank' href="https://drive.google.com/file/d/15zzYQVTvk7qIQRaq3u_SqP6U0f9tpvsd/view?usp=share_link">Resume</a></button></li>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;