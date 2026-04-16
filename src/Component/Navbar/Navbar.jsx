import React from 'react';
import navlogo from "../../assets/logo.png";
import { Link } from 'react-router';




const Navbar = () => {
    return (
        <div className=' shadow shadow-gray-200 pb-2'>
            <div className='w-11/12 mx-auto md:flex justify-between'>
            <div className='flex justify-center md:justify-start mt-2'>
                <img src={navlogo} alt="" />
                </div>
            <div className='flex justify-center gap-2 md:justify-end mt-2'>
                <Link to="/"><button className='btn bg-[#244D3F] text-white'><i className="fa-regular fa-house"></i>Home</button></Link>
                <Link to="/timeLine" className='btn border-none bg-white shadow-none'><i className="fa-regular fa-clock"></i>Timeline</Link>
                <Link to="/charts" className='btn border-none bg-white shadow-none'><i className="fa-solid fa-chart-line"></i>Stats</Link>
            </div>
        </div>
        </div>
    );
};


export default Navbar;
