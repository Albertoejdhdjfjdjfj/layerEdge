import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../../../../assets/images/Avatar.svg';
import LetterE from '../../../../../assets/images/LetterE.svg';
import './User.css';

const User = ({ order, name, invitedBy, points, linkTo = '/user' }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(linkTo)}
      className="user"
      id={order < 4 ? ['first', 'second', 'third'][order - 1] : ''}
    >
      <span>{order}</span>
      <div>
        <img src={Avatar} />
        <a>{name}</a>
      </div>

      <a>
        {invitedBy}
        <p>Invited by</p>
      </a>
      <p>
        <img src={LetterE} />
        <a>{points}</a>
      </p>
    </div>
  );
};

export default User;
