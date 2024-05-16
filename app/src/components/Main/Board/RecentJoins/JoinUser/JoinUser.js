import React from 'react';
import Avatar from '../../../../../assets/images/general/Avatar.svg';
import './JoinUser.css';

const JoinUser = ({ name, time }) => {
  return (
    <div className="join_user">
      <p>
        <img src={Avatar} />
        <a>{name}</a>
      </p>
      <a>{time}</a>
    </div>
  );
};

export default JoinUser;
