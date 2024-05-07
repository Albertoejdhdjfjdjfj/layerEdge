import React from 'react';
import JoinUser from './JoinUser/JoinUser';
import './RecentJoins.css';

const RecentJoins = () => {
  return (
    <div className="recent_joins">
      <p>Recent Joins</p>
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
      <JoinUser name="Frank" time="1 second ago" />
    </div>
  );
};

export default RecentJoins;
