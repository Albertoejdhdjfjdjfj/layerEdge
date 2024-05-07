import React from 'react';
import BitCoinLogo from '../../../../assets/images/BitCoinLogo2.svg';
import './MileStones.css';

const MileStones = () => {
  return (
    <div className="milestones">
      <span>
        <div>
          <p>1.0001 BTC</p>
          <a>Staked Tokens</a>
        </div>
        <div>
          <p>5 BTC</p>
          <a>Next Milestone</a>
        </div>
      </span>

      <div>
        <p></p>
        <div>
          <div></div>
        </div>
        <p>
          <span>
            <img src={BitCoinLogo} />
            <a>1 BTC</a>
          </span>
          <div>1</div>
          <p>+0.05%</p>
        </p>
        <p>
          <span>
            <img src={BitCoinLogo} />
            <a>5 BTC</a>
          </span>
          <div>2</div>
          <p>+0.1%</p>
        </p>
        <p>
          <span>
            <img src={BitCoinLogo} />
            <a>10 BTC</a>
          </span>
          <div>3</div>
          <p>+0.2%</p>
        </p>
        <p>
          <span>
            <img src={BitCoinLogo} />
            <a>50 BTC</a>
          </span>
          <div>4</div>
          <p>+0.4%</p>
        </p>
        <p>
          <span>
            <img src={BitCoinLogo} />
            <a>100 BTC</a>
          </span>
          <div>5</div>
          <p>+0.6%</p>
        </p>
      </div>

      <p>Bridge More</p>
    </div>
  );
};

export default MileStones;
