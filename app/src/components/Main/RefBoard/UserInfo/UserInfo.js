import React from 'react';
import './UserInfo.css';
import Avatar from '../../../../assets/images/general/Avatar.svg';

const UserInfo = () => {
  return (
    <div className="user_info">
      <img src={Avatar} />

      <div>
        <p>HarveyxSpecteri</p>
        <a>0x000...000</a>
      </div>

      <div>
        <p>+10% Points</p>
        <a>Rewards from Invites</a>
      </div>

      <div>
        <p>1/6</p>
        <a>Invites</a>
      </div>
    </div>
  );
};

export default UserInfo;
