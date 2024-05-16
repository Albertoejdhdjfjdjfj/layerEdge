import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccessForm from './AccessForm/AccessForm';
import Board from './Board/Board';
import Deposit from './Deposit/Deposit';
import RefBoard from './RefBoard/RefBoard';
import Assets from './Assets/Assets';
import WarningPopUp from '../../components/Main/Warning/WarningPopUp';
import Points from './Points/Points';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import './Main.css';

const Main = () => {
  const stateProfileMenu = useSelector((state) => state.componentsControlReducer.profile_menu);
  const stateProfileEdit = useSelector((state) => state.componentsControlReducer.profile_edit);
  const stateTransactionHistory = useSelector(
    (state) => state.componentsControlReducer.transaction_history
  );
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
      </Routes>
      {stateProfileMenu && <ProfileMenu />}
      {stateProfileEdit && <ProfileEdit />}
      {stateTransactionHistory && <TransactionHistory />}
    </div>
  );
};

export default Main;
