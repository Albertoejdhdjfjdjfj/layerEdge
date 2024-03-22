import React from 'react';
import Input from './Input/Input';
import './AccessForm.css';

const AccessForm = () => {
  return (
    <div className="access_form">
      <h2>Get early access</h2>
      <Input
        order={1}
        title="Enter your invite code"
        buttonTitle="Enter code"
        placeholder="Invite Code"
      />
      <Input order={2} title="Connect wallet" buttonTitle="Enter wallet" placeholder="Wallet" />
      <Input order={3} title="Follow us on X" buttonTitle="Enter X" placeholder="X" />
      <Input order={4} title="Join our Discord" buttonTitle="Enter Discord" placeholder="Discord" />
    </div>
  );
};

export default AccessForm;
