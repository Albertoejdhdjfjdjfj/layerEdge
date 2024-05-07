import React, { useState } from 'react';
import './Tiers.css';

const Tiers = () => {
  const [selectedTiere, selectTiere] = useState(false);
  return (
    <div className="tiers">
      <p>Free Tier</p>
      <div>
        <p className={selectedTiere == 1 ? 'selected_tire' : ''} onClick={() => selectTiere(1)}>
          <span>Economy</span>
          <a>30 sats/VB</a>
        </p>
        <p className={selectedTiere == 2 ? 'selected_tire' : ''} onClick={() => selectTiere(2)}>
          <span>Fastest</span>
          <a>35 sats/VB</a>
        </p>
        <p className={selectedTiere == 3 ? 'selected_tire' : ''} onClick={() => selectTiere(3)}>
          <span>Custom</span>
          <a>35 sats/VB</a>
        </p>
      </div>
    </div>
  );
};

export default Tiers;
