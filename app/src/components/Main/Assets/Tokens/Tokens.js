import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_token } from '../../../../redux/actions/components_control/actions';
import Arrow from '../../../../assets/images/general/Arrow.svg';
import BlackArrow from '../../../../assets/images/general/BlackArrow.svg';
import {useNavigate } from 'react-router-dom';
import { data } from './data/token_data';
import './Tokens.css';

const Tokens = () => {
  const selectedToken = useSelector((state) => state.componentsControlReducer.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="tokens">
      <a>2.Choose a token</a>
      <span>
        {data.map((el) => (
          <div
            className={selectedToken?.name == el.name ? 'selected_token' : ''}
            onClick={() => navigate('/warning')}
          >
            <div>
              <img src={el?.path} />
              <p>{el?.name}</p>
              <a>{el?.quantity}</a>
            </div>
            {selectedToken?.name == el.name ? <img src={BlackArrow} /> : <img src={Arrow} />}
          </div>
        ))}
      </span>
    </div>
  );
};

export default Tokens;
