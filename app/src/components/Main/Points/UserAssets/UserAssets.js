import React from 'react';
import USDT from '../../../../assets/images/USDTLogo.svg';
import Ethereum from '../../../../assets/images/EthereumLogo.svg';
import BitCoin from '../../../../assets/images/BitCoinLogo2.svg';
import './UserAssets.css';

const UserAssets = () => {
  return (
    <div className="user_assets">
      <a>YourAssets</a>
      <div>
        <div>
          <span>
            <img src={USDT}/>
            <img src={Ethereum}/>
          </span>
          <div>
            <p>USDT</p>
            <a>on Ethereum</a>
          </div>
          <a>0.2 ETH</a>
        </div>

        <div>
          <span>
            <img src={BitCoin}/>
            <img src={BitCoin}/>
          </span>
          <div>
            <p>BTC</p>
            <a>on Bitcoin</a>
          </div>
          <a>0.001 BTC</a>
        </div>
      </div>
    </div>
  );
};

export default UserAssets;
