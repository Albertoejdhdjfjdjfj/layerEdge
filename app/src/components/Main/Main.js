import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccessForm from './AccessForm/AccessForm';
import Board from './Board/Board';
import Deposit from './Deposit/Deposit';
import RefBoard from './RefBoard/RefBoard';
import Assets from './Assets/Assets';
import WarningPopUp from '../../components/Main/Warning/WarningPopUp';
import Points from './Points/Points';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<AccessForm />} />
        <Route path="/leaderboard" element={<Board />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/user" element={<RefBoard />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/warning" element={<WarningPopUp />} />
        <Route path="/points" element={<Points />} />
        <Route path="/edit" element={<ProfileEdit />} />
        <Route path="/history" element={<TransactionHistory />} />
      </Routes>
    </div>
  );
};

export default Main;
