import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    
    const {FriendId} = useParams();
    console.log(FriendId);
    
const friends = useLoaderData();
console.log(friends)

const expectedFriends = friends.find(friend=>friend.id == FriendId)
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


    return <div className='w-9/12 mx-auto pt-14'>

<div className="grid grid-cols-6 gap-4">

  <div className="col-span-2">   
<div className='bg-white shadow shadow-gray-300 flex flex-col items-center text-center rounded-lg'>
    
    <img src="" alt="" />
    <p className='font-semibold text-[20px]'>{name}</p>
    <div class="badge badge-error">{status}</div>
<div className="flex gap-2 flex-wrap mt-2">
  {tags.map((tag, index) => (
    <div key={index} className="badge badge-soft border border-green-500 badge-success">{tag}</div>))}</div>
    <p className='text-[16px] text-gray-500'>"Former colleague, great mentor"</p>
    <p className='text-[14px] text-gray-400'>Preferred: email</p>

    </div>
    <div className='flex flex-col'>
        <div className='btn bg-white w-full mt-3 text-center shadow shadow-gray-300 p-1.5'><i class="fa-regular fa-bell"></i>Snooze 2 weeks</div>
        <div className='btn bg-white w-full mt-3 text-center shadow shadow-gray-300 p-1.5'><i class="fa-solid fa-box-archive"></i>Archive</div>
        <div className='btn bg-white w-full mt-3 text-center shadow shadow-gray-300 p-1.5 text-red-600'><i class="fa-regular fa-trash-can"></i>Delete</div>
        </div>
  </div>


  <div className="col-span-4 bg-red-200">
    3 column
  </div>


</div>
    </div>
};

export default FriendDetails;