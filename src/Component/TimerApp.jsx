import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../index.css";

const TimerApp = () => {
  const [number, setNumber] = useState('');
  const [countdown, setCountdown] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setMsg('Countdown finished!');
    }
  }, [countdown]);

  const startTimer = () => {
    if (validateInput(number)) {
      setCountdown(number);
      setMsg('');
      setError('');
    }
  };

  const validateInput = (input) => {
    if (input === '' || isNaN(input) || input.includes('.') || input < 0) {
      setError('Please enter a positive integer');
      return false;
    }
    return true;
  };

  return (
    <div className='container'>
      <div className="box">
        <h2>Timer App</h2>
        <div className='textfield'>
          <TextField
            fullWidth
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            error={error !== ''}
            helperText={error}
            id="outlined-basic"
            label="Enter Number"
            variant="outlined"
          />
        </div>
        <div className='button'>
          <Button fullWidth variant="contained" onClick={startTimer}>
            Start Timer
          </Button>
        </div>
        <div className='timer'>
          {countdown}
          {msg && countdown === 0 && <p>{msg}</p>}
        </div>
      </div>
    </div>
  );
};

export default TimerApp;
