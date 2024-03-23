import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccessForm from './AccessForm/AccessForm';
import Board from './Board/Board';
import Deposit from './Deposit/Deposit';
import RefBoard from './RefBoard/RefBoard';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<AccessForm />} />
        <Route path="/leaderboard" element={<Board />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/user" element={<RefBoard />} />
      </Routes>
    </div>
  );
};

export default Main;
