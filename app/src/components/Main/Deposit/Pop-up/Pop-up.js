/* eslint-disable */
import React from 'react';
import './Pop-up.css';

const PopUp = ({ changeActive }) => {
  return (
    <div className="pop_up_wrapper">
      <div className="pop_up">
        <div>
          <h2>Withdraw</h2>
          <a>Withdrawls will be activated around Mainnet May</a>
        </div>
        <p onClick={changeActive}>Go Back</p>
      </div>
    </div>
  );
};

export default PopUp;
