import React from 'react';
import { useDispatch } from 'react-redux';
import { transaction_history_change } from '../../../redux/actions/components_control/actions';
import BitCoinLogo from '../../../assets/images/networks/BitCoin.svg';
import USDT from '../../../assets/images/tokens/USDT.svg';
import Avatar from '../../../assets/images/general/Avatar.svg';
import Logo from '../../../assets/images/general/Logo.svg';
import './TransactionHistory.css';

const TransactionHistory = () => {
  const dispatch = useDispatch();
  return (
    <div className="transaction_history_wrapper">
      <div className="transaction_history">
        <span>
          <div onClick={() => dispatch(transaction_history_change())}>
            <span></span>
            <span></span>
          </div>
          <img src={Logo} />
          <div className="connected_wallet">
            <span>
              <img src={BitCoinLogo} />
              <a>0.00851267 BTC</a>
            </span>
            <span>
              <img src={Avatar} />
              <a>Saurav_Devrani</a>
            </span>
          </div>
        </span>
        <p>Transaction History</p>
        <div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
          <div>
            <span>
              <img src={USDT} />
              <div>
                <p>USDT</p>
                <a>on Ethereum</a>
              </div>
            </span>
            <div>
              <p>
                From <a>bc1pw...0pz6v</a>
              </p>
              <p>
                Txid<a>16fdb...e7c8d</a>
              </p>
            </div>
            <a>1 second ago</a>
            <a>Pending</a>
            <p>0.2 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
