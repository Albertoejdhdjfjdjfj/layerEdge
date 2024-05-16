import React from 'react';
import { useBool } from '../../assets/functions/hooks/customHooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { profile_menu_change } from '../../redux/actions/components_control/actions';
import Logo from '../../assets/images/general/Logo.svg';
import BitCoinLogo from '../../assets/images/networks/BitCoin.svg';
import Avatar from '../../assets/images/general/Avatar.svg';
import Wallet from '../../assets/images/general/Wallet.svg';
import './Header.css';

const Header = () => {
  const [stateBurger, changeSteteBurger] = useBool();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className={stateBurger ? 'transform_header' : ''}>
      <span>
        <div className={stateBurger ? 'burger_menu_active' : ''} onClick={changeSteteBurger}>
          <span></span>
          <span></span>
        </div>
        <img src={Logo} />
        <p>TVL: $3 889 658 887</p>
      </span>
      <nav>
        <p onClick={() => navigate('/deposit')}>Bridge</p>
        <p onClick={() => navigate('/leaderboard')}>Leaderboard</p>
        <p onClick={() => navigate('/points')}>Points</p>
      </nav>

      <div className={currentPath == '/' ? '' : 'connected_wallet'}>
        <p>Connect wallet</p>
        <img src={Wallet} />
        <span>
          <img src={BitCoinLogo} />
          <a>0.00851267 BTC</a>
        </span>
        <span onClick={() => dispatch(profile_menu_change())}>
          <img src={Avatar} />
          <a>Saurav_Devrani</a>
        </span>
      </div>
    </header>
  );
};

export default Header;
