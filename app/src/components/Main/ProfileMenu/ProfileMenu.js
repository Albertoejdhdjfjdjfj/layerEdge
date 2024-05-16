import React from 'react';
import PenEdit from '../../../assets/images/general/PenEdit.svg';
import TimeClockLoading from '../../../assets/images/general/TimeClockLoading.svg';
import ExitLogOut from '../../../assets/images/general/ExitLogOut.svg';
import { useDispatch } from 'react-redux';
import {
  transaction_history_change,
  profile_edit_change,
  profile_menu_change
} from '../../../redux/actions/components_control/actions';
import './ProfileMenu.css';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="profile_menu">
      <div
        onClick={() => {
          dispatch(profile_edit_change());
          dispatch(profile_menu_change());
        }}
      >
        <img src={PenEdit} />
        <a>Edit profile</a>
      </div>
      <div
        onClick={() => {
          dispatch(transaction_history_change());
          dispatch(profile_menu_change());
        }}
      >
        <img src={TimeClockLoading} />
        <a>Transaction History</a>
      </div>
      <div onClick={() => dispatch()}>
        <img src={ExitLogOut} />
        <a>Log Out</a>
      </div>
    </div>
  );
};

export default ProfileMenu;
