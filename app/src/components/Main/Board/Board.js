import React from 'react';
import TopSection from './TopSection/TopSection';
import UsersList from './UsersList/UsersList';
import Paginator from './Paginator/Paginator';
import RecentJoins from './RecentJoins/RecentJoins';
import './Board.css';

const Board = () => {
  return (
    <div className="board">
      <TopSection />
      <RecentJoins />
      <UsersList />
      <Paginator />
    </div>
  );
};

export default Board;
