import React from 'react';
import Ref from './Ref/Ref';
import LetterE from '../../../../assets/images/general/LetterE.svg';
import Avatar from '../../../../assets/images/general/Avatar.svg';
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
        <Ref link="layeredge.io/invite/ID705" />
        <Ref link="layeredge.io/invite/ID705" />
        <Ref link="layeredge.io/invite/ID705" />
        <Ref link="layeredge.io/invite/ID705" />
        <Ref link="layeredge.io/invite/ID705" />
      </span>
    </div>
  );
};

export default RefsList;
