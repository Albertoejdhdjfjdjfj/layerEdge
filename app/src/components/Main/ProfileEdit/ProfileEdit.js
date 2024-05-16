import React from 'react';
import { useDispatch } from 'react-redux';
import { profile_edit_change } from '../../../redux/actions/components_control/actions';
import ProfileData from './ProfileData/ProfileData';
import BitCoinLogo from '../../../assets/images/networks/BitCoin.svg';
import Avatar from '../../../assets/images/general/Avatar.svg';
import Logo from '../../../assets/images/general/Logo.svg';
import './ProfileEdit.css';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  return (
    <div className="profile_edit_wrapper">
      <div className="profile_edit">
        <span>
          <div onClick={() => dispatch(profile_edit_change())}>
            <span></span>
            <span></span>
          </div>
          <img src={Logo} />
          <div className="connected_wallet">
            <span>
              <img src={BitCoinLogo} />
              <a>0.00851267 BTC</a>
            </span>
            <span>
              <img src={Avatar} />
              <a>Saurav_Devrani</a>
            </span>
          </div>
        </span>
        <ProfileData />
        <p>Save changes</p>
      </div>
    </div>
  );
};

export default ProfileEdit;
