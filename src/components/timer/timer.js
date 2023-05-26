import React, { useEffect, useState } from 'react';
import './timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(1);
  const [pause, setPause] = useState(true);

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(1);
    setPause(true);
  };

  const stop = () => {
    setPause(!pause);
  };

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      if (!pause) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(timer);
            } else {
              setHours(hours - 1);
            }
            setMinutes(59);
          } else {
            setMinutes(minutes - 1);
          }
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className='timer'>
      <h1 >
        {hours < 10 ? '0' + hours : hours}:
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </h1>
      <div
        className='button-container'
        style={{ flex: 1, alignContent: 'flex-start' }}
      >
        <button className='timer-button' onClick={stop}>
          {pause ? 'Resume' : 'Stop'}
        </button>
        <button className='timer-button' onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Timer;
