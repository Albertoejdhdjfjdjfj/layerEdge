import React from 'react';
import SelectArrow from '../../../../assets/images/SelectArrow.svg';
import './Select.css';

const Select = ({ logo, title }) => {
  return (
    <div className="select">
      <img src={logo} />
      {title}
      <img src={SelectArrow} />
    </div>
  );
};

export default Select;
