import React, { useState } from 'react';
import { data } from './assets/network_data';
import { useBool } from '../../../../assets/functions/hooks/customHooks';
import Arrow from '../../../../assets/images/Arrow.svg';
import BlackArrow from '../../../../assets/images/BlackArrow.svg';
import './Networks.css';

const Networks = () => {
  const [selectedNetwork, selectNetwork] = useState(data[0]);
  const [stateSelect, changeStateSelect] = useBool(true);
  return (
    <div className="networks">
      <a>1.Choose a network</a>
      <div
        className={'network_select'.concat(stateSelect ? ' network_select_active' : '')}
        onClick={() => changeStateSelect()}
      >
        <div>
          <img src={selectedNetwork.path} />
          <p>{selectedNetwork.name}</p>
          <a>{selectedNetwork.quantity}</a>
        </div>
        {stateSelect ? <img src={BlackArrow} /> : <img src={Arrow} />}
      </div>
      {stateSelect && (
        <span>
          {data.map((el, index) => (
            <div
              className={selectedNetwork.name == data[index].name ? 'selected_network' : ''}
              onClick={() => selectNetwork(data[index])}
            >
              <div>
                <img src={el.path} />
                <p>{el.name}</p>
                <a>{el.quantity}</a>
              </div>
              {selectedNetwork.name == data[index].name ? (
                <img src={BlackArrow} />
              ) : (
                <img src={Arrow} />
              )}
            </div>
          ))}
        </span>
      )}
    </div>
  );
};

export default Networks;
