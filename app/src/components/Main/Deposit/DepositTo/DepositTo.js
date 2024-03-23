import React from 'react';
import Logo from '../../../../assets/images/Logo.svg';
import './DepositTo.css';

const DepositTo = () => {
  return (
    <div className="deposit_to">
      <p>
        <a>To</a>
      </p>
      <div>
        <img src={Logo} />
        <div>
          <p>0.00014 WBTC</p>
          <a>Min. Deposit</a>
        </div>
        <span>
          <p>24 Hours</p>
          <a>Points Claim Cooldown</a>
        </span>
      </div>
    </div>
  );
};

export default DepositTo;
