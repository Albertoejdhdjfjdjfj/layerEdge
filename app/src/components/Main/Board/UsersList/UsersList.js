import React from 'react';
import User from './User/User';
import './UsersList.css';

const UsersList = () => {
  return (
    <div className="users_list">
      <p>
        <a>Rank</a>
        <a>Name</a>
        <a>Invited by</a>
        <a>Points</a>
      </p>
      <span>
        <User order="1" name="Durio07" invitedBy="Imnobody008" points="210 165 961" />
        <User order="2" name="OXNEOSU" invitedBy="XMIRROR" points="153 261 900" />
        <User order="3" name="000" invitedBy="Luke" points="131 957 258" />
        <User order="4" name="Frank" invitedBy="James666" points="114 509 131" />
        <User order="5" name="BreakingBad" invitedBy="BTCB" points="78 767 085" />
        <User order="6" name="DDDD" invitedBy="GPT" points="58 290 834" />
        <User order="7" name="ANDY" invitedBy="Luke" points="46 050 825" />
        <User order="8" name="SANDY" invitedBy="Frank" points="38 945 176" />
        <User order="9" name="Imnobody008" invitedBy="Lee" points="24 858 258" />
        <User order="10" name="KingQDKZ" invitedBy="Durio07" points="24 578 271" />
      </span>
    </div>
  );
};

export default UsersList;
