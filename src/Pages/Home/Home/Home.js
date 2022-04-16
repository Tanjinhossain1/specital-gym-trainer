import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import UserSay from '../UserSay/UserSay';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UserSay></UserSay>
            <Services></Services>
        </div>
    );
};

export default Home;