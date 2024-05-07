import React from 'react';
import './UserHeader.css';
import Avatar from '../../../../assets/images/Avatar.svg';

const UserHeader = () => {
  return (
    <div className="user_header">
      <span>
        <img src={Avatar} />
        <div>
          <p>HarveyxSpecteri</p>
          <a>0x000...000</a>
        </div>
      </span>
      <div>
        <p>7SARE</p>
        <a>Your invite code</a>
      </div>
      <div>
        <p>1/6</p>
        <a>Invites</a>
      </div>
    </div>
  );
};

export default UserHeader;
