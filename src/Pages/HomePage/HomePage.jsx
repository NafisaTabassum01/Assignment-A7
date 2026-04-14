import React, { Suspense } from 'react';
import Banner from '../../Component/Banner/Banner';
import AllFriends from '../../Component/AllFriends/AllFriends';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <AllFriends></AllFriends>
                </Suspense>

        </div>
    );
};

export default HomePage;