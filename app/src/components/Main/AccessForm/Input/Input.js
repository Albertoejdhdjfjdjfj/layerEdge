import React from 'react';
import { useBool } from '../../../../assets/functions/hooks/customHooks';
import CheckMark from '../../../../assets/images/general/CheckMark.svg';
import './Input.css';

const Input = ({ order, title, buttonTitle, placeholder }) => {
  const [formIsEntered, changeEnter] = useBool();
  const [buttonIsClicked, changeClick] = useBool();

  return (
    <div
      className={'access_input' + (buttonIsClicked && !formIsEntered ? ' access_input_active' : '')}
      id={formIsEntered ? 'access_input_entered' : ''}
    >
      <div>
        <a>
          <span>{order}</span> {title}
        </a>
        {!buttonIsClicked && <p onClick={changeClick}>{buttonTitle}</p>}
        {formIsEntered && <img src={CheckMark} />}
      </div>

      {buttonIsClicked && !formIsEntered && (
        <span>
          <div>
            <input type="text" placeholder={placeholder} />
          </div>
          <p onClick={changeEnter}>Enter</p>
        </span>
      )}
    </div>
  );
};

export default Input;
