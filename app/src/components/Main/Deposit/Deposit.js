import React from 'react';
import { useBool } from '../../../assets/functions/hooks/customHooks';
import DepositFrom from './DepositFrom/DepositFrom';
import DepositTo from './DepositTo/DepositTo';
import PupUp from './Pop-up/Pop-up';
import './Deposit.css';

const Deposit = () => {
  const [popUpActive, changeActive] = useBool();

  return (
    <div className="deposit">
      <h2>
        <a>Deposit</a>
        <a onClick={changeActive}>Withdraw</a>
      </h2>
      <DepositFrom />
      <DepositTo />
      <p>Bridge</p>
      {popUpActive && <PupUp changeActive={changeActive} />}
    </div>
  );
};

export default Deposit;
