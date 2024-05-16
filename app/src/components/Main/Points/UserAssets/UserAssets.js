import React from 'react';
import USDT from '../../../../assets/images/tokens/USDT.svg';
import './UserAssets.css';

const UserAssets = () => {
  return (
    <div className="user_assets">
      <a>YourAssets</a>
      <div>
        <div>
          <div>
            <span>
              <img src={USDT} />
            </span>
            <div>
              <p>USDT</p>
              <a>on Ethereum</a>
            </div>
          </div>

          <a>0.2 ETH</a>
        </div>
        <div>
          <div>
            <span>
              <img src={USDT} />
            </span>
            <div>
              <p>USDT</p>
              <a>on Ethereum</a>
            </div>
          </div>

          <a>0.2 ETH</a>
        </div>
      </div>
    </div>
  );
};

export default UserAssets;
