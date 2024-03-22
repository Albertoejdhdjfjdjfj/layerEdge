import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import Wallet from '../../assets/images/Wallet.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={Logo} />
      <nav>
        <p>Points</p>
        <p>Leaderboard</p>
      </nav>
      <div>
        <p>Connect wallet</p>
        <img src={Wallet} />
      </div>
    </header>
  );
};

export default Header;
