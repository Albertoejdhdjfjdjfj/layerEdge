import React from 'react';
import WarningLogo from '../../../assets/images/general/WarningLogo.svg';
import WarningLogo2 from '../../../assets/images/general/WarningLogo2.svg';
import {useNavigate } from 'react-router-dom';
import './WarningPopUp.css';
 
const WarningPopUp = () => {
  const navigate = useNavigate();
  return (
    <div className="warning_pop_up_wrapper">
      <div>
        <div>
          <img src={WarningLogo} />
        </div>
        <a>Use at your own risk</a>
        <span>
          The fee rate is much higher than recommended fee rate. Please be aware that sending the
          following assets involves risk.
        </span>
        <div>
          <img src={WarningLogo2} />
          <a>I understand and accept the risks associated with this transaction</a>
          <p>Confirm</p>
        </div>
        <p onClick={()=>navigate('/deposit')}>Cancel</p>
      </div>
    </div>
  );
};

export default WarningPopUp;
