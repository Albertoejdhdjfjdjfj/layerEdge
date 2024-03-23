import React from 'react';
import Select from '../Select/Select';
import Ethereum from '../../../../assets/images/EthereumLogo.svg';
import BitCoin from '../../../../assets/images/BitCoinLogo.svg';
import './DepositFrom.css';

const DepositFrom = () => {
  return (
    <div className="deposit_from">
      <p>
        <a>From</a>
        <Select logo={Ethereum} title="Ethereum" />
      </p>
      <div>
        <span>
          <p>0.00</p>
          <a>$0.00</a>
        </span>
        <Select logo={BitCoin} title="WBTC" />
      </div>
      <span>
        <p>0.00 WBTC</p>
        <a>Balance</a>
      </span>
    </div>
  );
};

export default DepositFrom;
