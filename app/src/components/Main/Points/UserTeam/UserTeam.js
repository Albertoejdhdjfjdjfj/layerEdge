import React from 'react';
import './UserTeam.css';
import TeamMate from './TeamMate/TeamMate';

const UserTeam = () => {
  return (
    <div className="user_team">
      <a>Your team</a>
      <span>
        <p>0.0582 BTC</p>
        <a>Total assets staking</a>
      </span>
      <p>
        <a>Name</a>
        <a>Wallet</a>
        <a>Total Assets</a>
      </p>
      <div>
        <TeamMate number={1} name={'Frank'} wallet={'0x000...000'} total_assets={0.05} />
        <TeamMate number={1} name={'Frank'} wallet={'0x000...000'} total_assets={0.05} />
      </div>
    </div>
  );
};

export default UserTeam;
