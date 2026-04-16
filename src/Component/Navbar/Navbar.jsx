import React from 'react';
import navlogo from "../../assets/logo.png";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='shadow shadow-gray-200 pb-2'>
            <div className='w-11/12 mx-auto md:flex justify-between'>

                <div className='flex justify-center md:justify-start mt-2'>
                    <img src={navlogo} alt="" />
                </div>

                <div className='flex justify-center gap-2 md:justify-end mt-2'>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-[#244D3F] text-white"
                                : "btn bg-white shadow-none"}>

                        <i className="fa-regular fa-house"></i> Home
                    </NavLink>

                    <NavLink
                        to="/timeLine"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-[#244D3F] text-white"
                                : "btn bg-white shadow-none"}>

                        <i className="fa-regular fa-clock"></i> Timeline
                    </NavLink>

                    <NavLink
                        to="/charts"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-[#244D3F] text-white"
                                : "btn bg-white shadow-none"}>
                        <i className="fa-solid fa-chart-line"></i> Stats
                    </NavLink>

                </div>

            </div>
        </div>
    );
};

export default Navbar;