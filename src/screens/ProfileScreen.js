import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

import Nav from '../Nav';
import PlanScreen from './PlanScreen';
import './ProfileScreen.css'

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="avatar"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button
                                className='profileScreen__signOut'
                                onClick={() => auth.signOut()}
                            >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;