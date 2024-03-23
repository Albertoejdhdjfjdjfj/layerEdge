import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import RefsList from './RefsList/RefsList';
import './RefBoard.css';

const RefBoard = () => {
  return (
    <div className="ref_board">
      <UserInfo />
      <RefsList />
    </div>
  );
};

export default RefBoard;
