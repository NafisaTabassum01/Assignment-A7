// import React from 'react';
// import Ayesha from "../../assets/Ayesha.png";
// import Farhana from "../../assets/Farhana.png";
// import Imran from "../../assets/Imran.png";
// import Mehedi from "../../assets/Mehedi.png";
// import Mim from "../../assets/Mim.png";
// import Nusrat from "../../assets/Nusrat.png";
// import Rakib from "../../assets/Rakib.png";
// import Sadia from "../../assets/Sadia.png";
// import Shakil from "../../assets/Shakil.png";
// import Tanvir from "../../assets/Tanvir.png";


// const images = {
//   Ayesha,
//   Farhana,
//   Imran,
//   Mehedi,
//   Mim,
//   Nusrat,
//   Rakib,
//   Sadia,
//   Shakil,
//   Tanvir
// };
// const FriendsCard = ({friends}) => {
//     console.log(friends)
//     return (
//         <div>
           
// <div className='md:grid grid-cols-4 gap-4 w-10/12 mx-auto '>
//     {friends.map((friend)=>{
//         console.log(friend,'friend')
//     return <div>
//                 <div className='flex flex-col items-center gap-1.5 bg-white py-8 mb-3 rounded-xl shadow-lg shadow-gray-300'>
//              <img src={images[friend.picture]} alt="" />
//               <p className='font-semibold text-[20px]'>{friend.name}</p>
//               <p className='text-[12px] text-gray-400'>{friend.days_since_contact}d ago</p>
             
//               <div className="flex gap-2 flex-wrap">{friend.tags.map((tag, index) => (
//               <div key={index} className="badge badge-soft border border-green-500 badge-success">{tag}</div>))}</div>
//               <div className={`badge rounded-2xl py-3 ${
//                              friend.status === "On-Track"?"bg-[#244D3F] text-white": friend.status === "Almost Due"? "bg-[#EFAD44] text-white": "bg-[#EF4444] text-white"}`}>{friend.status}</div>


//                 </div>


//             </div>
         
//     })}


// </div>
           
//         </div>
//     );
// };


// export default FriendsCard;
