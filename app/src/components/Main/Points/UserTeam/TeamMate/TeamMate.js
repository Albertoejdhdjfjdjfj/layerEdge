import React from 'react';
import './TeamMate.css';
import Avatar from '../../../../../assets/images/general/Avatar.svg';
import BitCoin from '../../../../../assets/images/networks/BitCoin.svg';

const TeamMate = ({ number, name, wallet, total_assets }) => {
  return (
    <div className="team_mate">
      <span>{number}</span>
      <div>
        <img src={Avatar} />
        <a>{name}</a>
      </div>
      <a>{wallet}</a>
      <p>
        <img src={BitCoin} />
        <a>{total_assets} BTC</a>
      </p>
    </div>
  );
};

export default TeamMate;
