import React from 'react';
import FooterLogo from '../../assets/logo-xl.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white p-8'>
            <div className='flex flex-col items-center text-center'>
         <img src={FooterLogo} alt="" />
         <p className='text-[16px] text-gray-300 pt-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
         <p className='text-[20px] font-20 pt-4'>Social Links</p>
         <div className='flex gap-4 pt-3'>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
         </div>
            </div>
         <hr className='border border-gray-600 m-5'/>
         <div className='w-10/12 mx-auto'>
            
            <div className='grid grid-cols-1 md:flex justify-between text-gray-400'>
            
            <p className='font-[16px]'>© 2026 KeenKeeper. All rights reserved.</p>
            <div className='flex gap-5'>
            
            <p>Privacy Policy</p>           <p>Terms of Service</p>           <p>Cookies</p>
         
         </div>
         </div>
         
            
            </div>   
        </div>
    );
};

export default Footer;