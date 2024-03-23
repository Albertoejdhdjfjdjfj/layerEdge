import React from 'react';
import PenEdit from '../../../../assets/images/PenEdit.svg';
import './TopSection.css';

const TopSection = () => {
  return (
    <div className="top_section">
      <span>
        <p>26675</p>
      </span>
      <div className="user_name">
        <a>Saurav_Devrani</a>
        <p>
          <img src={PenEdit} />
          Edit
        </p>
      </div>
      <div className="invited_by">
        <a>DaoForFun</a>
        <span>Invited by</span>
      </div>
      <p>
        <a>0</a>
        <span>Points</span>
      </p>
    </div>
  );
};

export default TopSection;