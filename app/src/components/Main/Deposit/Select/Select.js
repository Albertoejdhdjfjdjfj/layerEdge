import React from 'react';
import SelectArrow from '../../../../assets/images/general/SelectArrow.svg';
import {useNavigate } from 'react-router-dom';
import './Select.css';

const Select = ({ logo, title }) => {
  const navigate = useNavigate();
  return (
    <div className="select" onClick={()=>navigate('/assets')}>
      <img src={logo} />
      {title}
      <img src={SelectArrow} />
    </div>
  );
};

export default Select;
