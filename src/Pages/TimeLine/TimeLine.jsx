import React, { useContext } from 'react';
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

    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-[48px] font-bold mb-4">Timeline</h2>

            {
                friends.length === 0 ? (
                    <p className='text-center font-medium mb-4'>No interactions yet</p>
                ) : (
                    friends.map((item) => (

                        <div key={item.id} className="bg-white shadow rounded flex gap-10 mb-4 p-5">
                            
                            <div><div><img src={iconMap[item.type]} alt=""/></div></div>
                            
                            <div>
                            <div className='flex'><p><span className='text-[20px] font-medium'>{item.type} </span><span className='text-[18px] text-[#64748B]'>with</span><span className='text-[18px] text-[#64748B]'> {item.name}</span></p></div>
                            <p>Date: {item.date}</p></div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default TimeLine;