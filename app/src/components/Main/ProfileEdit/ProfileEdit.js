import React from 'react';
import ProfileData from './ProfileData/ProfileData';
import Wallet from '../../../assets/images/Wallet.svg';
import BitCoinLogo from '../../../assets/images/BitCoinLogo2.svg';
import Avatar from '../../../assets/images/Avatar.svg';
import Logo from '../../../assets/images/Logo.svg';
import './ProfileEdit.css';

const ProfileEdit = () => {
  return (
    <div className="profile_edit_wrapper">
      <div className="profile_edit">
        <span>
          <div>
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
