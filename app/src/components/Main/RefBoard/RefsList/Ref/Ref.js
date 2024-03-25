import React from 'react';
import './Ref.css';

const Ref = ({ link }) => {
  return (
    <div className="ref">
      <span>
        <a>{link}</a> <p>Copy</p>
      </span>
    </div>
  );
};

export default Ref;
