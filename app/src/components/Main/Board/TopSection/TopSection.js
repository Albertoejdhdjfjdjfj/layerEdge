import React from 'react';
import PenEdit from '../../../../assets/images/general/PenEdit.svg';
import './TopSection.css';

const TopSection = () => {
  return (
    <div className="top_section">
      <div>
        <a>1.0001 BTC</a>
        <span>Staked</span>
      </div>
      <div>
        <a>100.05%</a>
        <span>Multiplier</span>
      </div>
      <div>
        <a>230 420</a>
        <span>Points</span>
      </div>
    </div>
  );
};

export default TopSection;
