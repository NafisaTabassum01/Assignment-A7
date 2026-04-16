import React, { createContext, useState } from 'react';

export const TimelineFriendContext = createContext();



const TimeLineContext = ({children}) => {

 const [friends, setFriends] = useState([]);
const data = {
    friends,
    setFriends,
}


    return <TimelineFriendContext.Provider value={data}>{children}</TimelineFriendContext.Provider>
};

export default TimeLineContext;