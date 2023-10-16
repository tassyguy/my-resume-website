// LastCommitTimestamp.js
'use client';

import React, { useState, useEffect } from 'react';

const LastCommitTimestamp = () => {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    async function fetchTimestamp() {
      try {
        const response = await fetch('/lastCommitTimestamp.txt');
        const data = await response.text();
        setTimestamp(data);
      } catch (error) {
        console.error('Error fetching last commit timestamp:', error);
      }
    }

    fetchTimestamp();
  }, []);

  return (
    <div className={'timestamp'}>
      Last Commit Timestamp: {timestamp}
    </div>
  );
};

export default LastCommitTimestamp;
