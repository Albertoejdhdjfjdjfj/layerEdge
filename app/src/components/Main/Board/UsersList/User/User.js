import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../../../../assets/images/general/Avatar.svg';
import LetterE from '../../../../../assets/images/general/LetterE.svg';
import './User.css';

const User = ({
  order,
  name,
  invitedBy,
  points,
  linkTo = '/user',
  stakingPoints = 0,
  bonusPoints = 0
}) => {
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
      <div>
        <p>
          <span>Staking Points</span>
          <a>{stakingPoints}</a>
        </p>
        <p>
          <span>Bonus Points</span>
          <a>{bonusPoints}</a>
        </p>
      </div>
    </div>
  );
};

export default User;
