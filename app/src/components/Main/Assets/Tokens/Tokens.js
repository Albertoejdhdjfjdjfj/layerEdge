import React, { useState } from 'react';
import BitCoinLogo from '../../../../assets/images/BitCoinLogo2.svg';
import Arrow from '../../../../assets/images/Arrow.svg';
import BlackArrow from '../../../../assets/images/BlackArrow.svg';
import './Tokens.css';

const Tokens = () => {
  const [selectedToken, selectToken] = useState(false);
  return (
    <div className="tokens">
      <a>2.Choose a token</a>
      <span>
        <div className={selectedToken == 1 ? 'selected_token' : ''} onClick={() => selectToken(1)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 1 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
        <div className={selectedToken == 2 ? 'selected_token' : ''} onClick={() => selectToken(2)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 2 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
        <div className={selectedToken == 3 ? 'selected_token' : ''} onClick={() => selectToken(3)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 3 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
        <div className={selectedToken == 4 ? 'selected_token' : ''} onClick={() => selectToken(4)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 4 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
        <div className={selectedToken == 5 ? 'selected_token' : ''} onClick={() => selectToken(5)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 5 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
        <div className={selectedToken == 6 ? 'selected_token' : ''} onClick={() => selectToken(6)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 6 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
        <div className={selectedToken == 7 ? 'selected_token' : ''} onClick={() => selectToken(7)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 7 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
        <div className={selectedToken == 8 ? 'selected_token' : ''} onClick={() => selectToken(8)}>
          <div>
            <img src={BitCoinLogo} />
            <p>Bitcoin</p>
            <a>1 Token</a>
          </div>
          {selectedToken == 8 ? <img src={BlackArrow} /> : <img src={Arrow} />}
        </div>
      </span>
    </div>
  );
};

export default Tokens;
