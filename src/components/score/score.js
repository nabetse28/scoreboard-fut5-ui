import React, { useState } from 'react';

const Score = (Name) => {
  const [teamName, setTeamName] = useState(Name);
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>{teamName}</h1>
      <span>{counter}</span>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};
