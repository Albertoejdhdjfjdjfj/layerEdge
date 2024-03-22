import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccessForm from './AccessForm/AccessForm';
import Board from './Board/Board';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<AccessForm />} />
        <Route path="/leaderboard" element={<Board />} />
        <Route path="/ "/>
      </Routes>
    </div>
  );
};

export default Main;
