import React from 'react';
import Banner from '../Banner/Banner';
import MyMIssion from '../MyMission/MyMIssion';
import Services from '../Services/Services';
import UserSay from '../UserSay/UserSay';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UserSay></UserSay>
            <Services></Services>
            <MyMIssion></MyMIssion>
        </div>
    );
};

export default Home;