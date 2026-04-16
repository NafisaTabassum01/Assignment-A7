// import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

import Ayesha from "../../assets/Ayesha.png";
import Farhana from "../../assets/Farhana.png";
import Imran from "../../assets/Imran.png";
import Mehedi from "../../assets/Mehedi.png";
import Mim from "../../assets/Mim.png";
import Nusrat from "../../assets/Nusrat.png";
import Rakib from "../../assets/Rakib.png";
import Sadia from "../../assets/Sadia.png";
import Shakil from "../../assets/Shakil.png";
import Tanvir from "../../assets/Tanvir.png";
import { Link } from 'react-router';

import { useContext } from 'react';
import { TimelineFriendContext } from '../../Context/TimeLineContext';


const images = {
  Ayesha,
  Farhana,
  Imran,
  Mehedi,
  Mim,
  Nusrat,
  Rakib,
  Sadia,
  Shakil,
  Tanvir
};


const FriendDetails = () => {
      const today = new Date().toLocaleDateString();

    
    const {FriendId} = useParams();
    console.log(FriendId);
    
const friendsData = useLoaderData();
console.log(friendsData)

const expectedFriends = friendsData.find(friend=>friend.id == FriendId)
console.log(expectedFriends);

const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    bio,
    next_due_date,
    goal,
    tags

} = expectedFriends

const { friends, setFriends } = useContext(TimelineFriendContext);
const handleAddToTimeline = (type) => {
    const newItem = {
        id: Date.now(),
        name,
        type,
        date: today,
    };

    setFriends(prev => [newItem, ...prev]);
};





    return <div className='w-9/12 mx-auto pt-14'>

<div className="grid-cols-2 md:grid grid-cols-6 gap-4 mb-12">

  <div className="col-span-2">   
<div className='bg-white shadow shadow-gray-300 flex flex-col items-center text-center rounded-lg py-8'>
    
<img src={images[picture]} alt={name} />
    <p className='font-semibold text-[20px]'>{name}</p>
<div className={`badge rounded-2xl py-3 ${
                            status === "On-Track"?"bg-[#244D3F] text-white":status === "Almost Due"? "bg-[#EFAD44] text-white": "bg-[#EF4444] text-white"}`}>{status}</div><div className="flex gap-2 flex-wrap mt-2">
  {tags.map((tag, index) => (
    <div key={index} className="badge badge-soft border border-green-500 badge-success mb-2">{tag}</div>))}</div>
    
    <p className='text-[16px] text-gray-500  mb-2 px-2'>{bio}</p>
    <p className='text-[14px] text-gray-400'>Preferred:{email}</p>

    </div>
    <div className='flex flex-col'>
        <div className='btn bg-white w-full mt-3 text-center shadow shadow-gray-300 p-1.5'><i class="fa-regular fa-bell"></i>Snooze 2 weeks</div>
        <div className='btn bg-white w-full mt-3 text-center shadow shadow-gray-300 p-1.5'><i class="fa-solid fa-box-archive"></i>Archive</div>
        <div className='btn bg-white w-full mt-3 text-center shadow shadow-gray-300 p-1.5 text-red-600'><i class="fa-regular fa-trash-can"></i>Delete</div>
        </div>
  </div>


  <div className="col-span-4">
    <div className='w-full mx-auto grid-cols-1 md:grid grid-cols-3 gap-5 text-center'>
<div className='bg-white rounded-sm shadow shadow-gray-300 p-3'>
    <p className='font-semibold text-[30px] text-[#244D3F]'>{days_since_contact}</p>
    <p className='text-[#64748B] font-[18px]'>Days Since Contact</p>
</div>
<div className='bg-white rounded-sm shadow shadow-gray-300 p-3'>
    <p className='font-semibold text-[30px] text-[#244D3F]'>{goal}</p>
    <p className='text-[#64748B] font-[18px]'>Goal (Days)</p>
</div>
<div className='bg-white rounded-sm shadow shadow-gray-300 p-3'>
<p className='font-semibold text-[30px] text-[#244D3F]'>{next_due_date}</p>
    <p className='text-[#64748B] font-[18px]'>Next Due</p>
</div>
    </div>
    <div className='bg-white mt-3 w-full p-4 rounded-sm shadow shadow-gray-300'>
        <div className='flex justify-between'><p className='text-[20px] text-[#244D3F] font-semibold'>Relationship Goal</p> <button className='btn'>Edit</button></div>
        <div><span className='text-[18px] text-gray-400'>Connect every</span> <span className='font-bold text-[18px]'>{goal} days </span></div>
    </div>

    <div className='bg-white mt-3 w-full rounded-sm shadow shadow-gray-300 p-4'>
        <p className='text-[#244D3F] text-[20px] pb-2 font-medium'>Quick Check-In</p>
        <div className='grid grid-cols-3 gap-3 mx-auto text-center'>

    
    <button onClick={() => handleAddToTimeline("Call")} className='btn bg-[#F8FAFC] border border-gray-200 rounded-lg p-9'>
    <i class="fa-solid fa-phone"></i> 
    <p className='text-[18px]'>Call</p>
    </button>

    <button onClick={() => handleAddToTimeline("Text")} className='btn bg-[#F8FAFC] border border-gray-200 rounded-lg p-9'>
    <i class="fa-regular fa-message"></i> 
    <p className='text-[18px]'>Text</p>
    </button>
            
            
    <button onClick={() => handleAddToTimeline("Video")} className='btn bg-[#F8FAFC] border border-gray-200 rounded-lg p-9'>
    <i class="fa-solid fa-video"></i> 
    <p className='text-[18px]'>Video</p>
    </button>
        </div>
    </div>
    <div className='bg-white mt-3 w-full rounded-sm shadow shadow-gray-300 p-5'>
        <div className='flex justify-between'>
            <p className='text-[20px] text-[#244D3F] font-semibold'>Recent Interactions</p>
            <button className='btn'>Full History</button>
        </div>
        <div className='flex justify-between mt-8'>
            <div>
        <p className='font-medium'>Text</p>
        <p className='text-gray-500 text-[16px]'>Asked for career advice</p>
            </div>
            <div className='text-gray-400 text-[16px] mt-2'>{today}</div>
        </div>
          <div className="divider my-0"></div>

          <div className='flex justify-between mt-4'>
            <div>
        <p className='font-medium'>Meetup</p>
        <p className='text-gray-500 text-[16px]'>Industry conference meetup</p>
            </div>
            <div className='text-gray-400 text-[16px] mt-2'>{today}</div>
        </div>
        
          <div className="divider my-0"></div>

          <div className='flex justify-between mt-4'>
            <div>
        <p className='font-medium'>Video</p>
        <p className='text-gray-500 text-[16px]'>Asked for career advice</p>
            </div>
            <div className='text-gray-400 text-[16px] mt-2'>{today}</div>
        </div>
        
          <div className="divider my-0"></div>

          <div className='flex justify-between mt-4'>
            <div>
        <p className='font-medium'>Text</p>
        <p className='text-gray-500 text-[16px]'>Asked for career advice</p>
            </div>
            <div className='text-gray-400 text-[16px] mt-2'>{today}</div>
        </div>
        

    </div>
  </div>


</div>
    </div>
};

export default FriendDetails;