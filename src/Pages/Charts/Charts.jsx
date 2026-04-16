import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineFriendContext } from '../../Context/TimeLineContext';


const Charts = () => {

const { friends } = useContext(TimelineFriendContext);
    
const callCount = friends.filter(item => item.type === "Call").length;
const textCount = friends.filter(item => item.type === "Text").length;
const videoCount = friends.filter(item => item.type === "Video").length;

const data = [
  { name: 'Call', value: callCount, fill: '#64c466' },
  { name: 'Text', value: textCount, fill: '#642f96' },
  { name: 'Video', value: videoCount, fill: '#244D3F' },
 
];


    return (
<div className='w-10/12 mx-auto '>
    <p className='text-[48px] font-bold mt-14'>Friendship Analytics</p>
    
    <div className='bg-white my-10 rounded-lg shadow shadow-gray-300 pb-5'>
        
            <PieChart width={400} height={400} className='mx-auto'>
                
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="60%"
                    outerRadius="80%"
                    cornerRadius={10}
                    paddingAngle={4}
                    isAnimationActive={true}
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
            </PieChart>

        </div></div>        
        
    );
};

export default Charts;