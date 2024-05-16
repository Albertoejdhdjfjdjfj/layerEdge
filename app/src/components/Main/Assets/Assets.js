import React from 'react';
import Glass from '../../../assets/images/general/Glass.svg';
import Neworks from './Networks/Networks';
import Tokens from './Tokens/Tokens';
import {useNavigate } from 'react-router-dom';
import './Assets.css';

const Assets = () => {
  const navigate = useNavigate();
  return (
    <div className="assets_wrapper">
      <div className="assets">
        <h2>Choose an asset</h2>
        <div>
          <input type="text" placeholder="Search an asset" />
          <img src={Glass} />
        </div>
        <span>
          <Neworks />
          <Tokens />
        </span>
      </div>
    </div>
  );
};

export default Assets;
