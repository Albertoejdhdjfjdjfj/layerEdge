import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_network } from '../../../../redux/actions/components_control/actions';
import { data } from './data/network_data';
import { useBool } from '../../../../assets/functions/hooks/customHooks';
import Arrow from '../../../../assets/images/general/Arrow.svg';
import BlackArrow from '../../../../assets/images/general/BlackArrow.svg';
import './Networks.css';

const Networks = () => {
  const selectedNetwork = useSelector((state) => state.componentsControlReducer.network);
  const [currentNetwork, changeNetwork] = useState(data[0]);
  const [stateSelect, changeStateSelect] = useBool(true);
  const dispatch = useDispatch();

  return (
    <div className="networks">
      <a>1.Choose a network</a>
      <div
        className={'network_select'.concat(stateSelect ? ' network_select_active' : '')}
        onClick={() => changeStateSelect()}
      >
        <div>
          <img src={currentNetwork?.path} />
          <p>{currentNetwork?.name}</p>
          <a>{currentNetwork?.quantity}</a>
        </div>
        {stateSelect ? <img src={BlackArrow} /> : <img src={Arrow} />}
      </div>
      {stateSelect && (
        <span>
          {data.map((el) => (
            <div
              className={selectedNetwork?.name == el.name ? 'selected_network' : ''}
              onClick={() => {
                dispatch(set_network(el));
                changeNetwork(el);
              }}
            >
              <div>
                <img src={el?.path} />
                <p>{el?.name}</p>
                <p>{el?.quantity}</p>
              </div>
              {selectedNetwork?.name == el.name ? <img src={BlackArrow} /> : <img src={Arrow} />}
            </div>
          ))}
        </span>
      )}
    </div>
  );
};

export default Networks;
