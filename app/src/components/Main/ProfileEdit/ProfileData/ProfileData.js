import React from 'react';
import Avatar from '../../../../assets/images/Avatar.svg';
import './ProfileData.css';

const ProfileData = () => {
  return (
    <div className="profile_data">
      <p>Edit Profile</p>
      <a>Profile Picture</a>
      <img src={Avatar} />
      <p>
        <div></div> <a>Hide your profile picture from leaderboard</a>
      </p>
      <span>
        <a>Username</a>
        <p>Saurav_Devrani</p>
      </span>
      <span>
        <a>Connected Wallet</a>
        <p>0x000...000</p>
      </span>
    </div>
  );
};

export default ProfileData;
