import React from 'react';


const Banner = () => {
    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='text-center'>
                <h1 className='font-bold text-[48px]'>Friends to keep close in your life</h1>
                <p className='text-[16px] text-gray-400 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
           <button className='btn bg-[#244D3F] text-white my-6'>+ Add a Friend</button>
            </div>
            <div className='md:flex justify-center gap-5 pb-8 pt-2 w-full'>
                <div className='md:grid grid-cols-1 bg-white text-center px-14 py-7 shadow shadow-gray-300 mb-2'>
                    <p className='font-semibold text-[32px] text-[#244D3F]'>10</p>
                    <p className='text-[18px] text-[#64748B]'>Total Friends</p>
                </div>
                <div className='grid grid-cols-1 bg-white text-center px-14  shadow shadow-gray-300 py-7 mb-2'>
                    <p className='font-semibold text-[32px] text-[#244D3F]'>3</p>
                    <p className='text-[18px] text-[#64748B]'>On Track</p>
                </div>
                <div className='grid grid-cols-1 bg-white text-center shadow shadow-gray-300 px-14 py-7 mb-2'>
                    <p className='font-semibold text-[32px] text-[#244D3F]'>6</p>
                    <p className='text-[18px] text-[#64748B]'>Need Attention</p>
                </div>
                <div className='grid grid-cols-1 bg-white text-center  shadow shadow-gray-300 px-14 py-7 mb-2'>
                    <p className='font-semibold text-[32px] text-[#244D3F]'>12</p>
                    <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
            <hr className='border border-gray-200'/>
        </div>
    );
};


export default Banner;
