import React from 'react';
import LetterE from '../../../../assets/images/LetterE.svg';
import Avatar from '../../../../assets/images/Avatar.svg';
import './RefsList.css';

const RefsList = () => {
  return (
    <div className="refs_list">
      <p>
        <a>Name</a>
        <a>Invite Link</a>
        <a>Points</a>
      </p>
      <span>
        <div>
          <span>
            <img src={Avatar} />
            Durio07
          </span>
          <a>layeredge.io/invite/6E5WS</a>
          <div>
            <img src={LetterE} />
            <a>210 165 961</a>
          </div>
        </div>
        <div>
          <span>
            <a>layeredge.io/invite/ID705</a> <p>Copy</p>
          </span>
        </div>
        <div>
          <span>
            <a>layeredge.io/invite/ID705</a> <p>Copy</p>
          </span>
        </div>
        <div>
          <span>
            <a>layeredge.io/invite/ID705</a> <p>Copy</p>
          </span>
        </div>
        <div>
          <span>
            <a>layeredge.io/invite/ID705</a> <p>Copy</p>
          </span>
        </div>
        <div>
          <span>
            <a>layeredge.io/invite/ID705</a> <p>Copy</p>
          </span>
        </div>
      </span>
    </div>
  );
};

export default RefsList;
