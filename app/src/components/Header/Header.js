import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import LetterE from '../../assets/images/LetterE.svg';
import Wallet from '../../assets/images/Wallet.svg';
import './Header.css';

const Header = () => {
  const navigate=useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;
 
  return (
    <header>
      <img src={Logo} />
      <nav>
        <p onClick={()=>navigate('/deposit')}>Points</p>
        <p onClick={()=>navigate('/leaderboard')}>Leaderboard</p>
      </nav>
      {currentPath == '/' ? (
        <div>
          <p>Connect wallet</p>
          <img src={Wallet} />
        </div>
      ) : (
        <span>
          <div>
            <img src={LetterE} />
            <a>0 Points</a>
          </div>
          <p>0x000...000</p>
        </span>
      )}
    </header>
  );
};

export default Header;
