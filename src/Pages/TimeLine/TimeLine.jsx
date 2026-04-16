import React, { useContext, useState } from 'react';
import { TimelineFriendContext } from '../../Context/TimeLineContext';
import Call from '../../assets/Call.png'
import Text from '../../assets/Text.png'
import Video from '../../assets/Video.png'

const iconMap = {
    Call,
    Video,
    Text
};

const TimeLine = () => {

    const { friends } = useContext(TimelineFriendContext); 

    const [shortingType, setShortingType] = useState("");

    const filteredFriends = shortingType
        ? friends.filter(item => item.type === shortingType)
        : friends;

    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-[48px] font-bold mb-4">Timeline</h2>

            
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1 text-gray-500 mb-4">
                    Filter Timeline
                </div>

                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
                    <li><button onClick={() => setShortingType("Call")}>Call</button></li>
                    <li><button onClick={() => setShortingType("Text")}>Text</button></li>
                    <li><button onClick={() => setShortingType("Video")}>Video</button></li>
                    <li><button onClick={() => setShortingType("")}>All</button></li>
                </ul>
            </div>

            {
                filteredFriends.length === 0 ? (
                    <p className='text-center font-medium mb-4'>No interactions found</p>
                ) : (
                    filteredFriends.map((item) => (
                        <div key={item.id} className="bg-white shadow rounded flex gap-10 mb-4 p-5">

                            <div>
                                <img src={iconMap[item.type]} alt="" />
                            </div>

                            <div>
                                <p>
                                    <span className='text-[20px] font-medium'>{item.type}</span>
                                    <span className='text-[18px] text-[#64748B]'> with </span>
                                    <span className='text-[18px] text-[#64748B]'> {item.name}</span>
                                </p>

                                <p className='text-[16px] text-[#728093]'>
                                    {item.date}
                                </p>
                            </div>

                        </div>
                    ))
                )
            }

        </div>
    );
};

export default TimeLine;