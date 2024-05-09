import React from 'react';
import UserHeader from './UserHeader/UserHeader';
import MileStones from './MileStones/MileStones';
import UserAssets from './UserAssets/UserAssets';
import UserTeam from './UserTeam/UserTeam';
import './Points.css';

const Points = () => {
  return (
    <div className="points">
      <UserHeader />
      <MileStones />
      <UserAssets />
      <UserTeam />
    </div>
  );
};

export default Points;
