import React from 'react';
import Arrow from '../../../../assets/images/general/Arrow.svg';
import Dots from '../../../../assets/images/general/Dots.svg';
import './Paginator.css';

const Paginator = () => {
  return (
    <div className="paginator">
      <p className="arrow_left">
        <img src={Arrow} />
      </p>
      <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <img src={Dots} />
        <p>10</p>
      </div>
      <p className="arrow_right">
        <img src={Arrow} />
      </p>
    </div>
  );
};

export default Paginator;
