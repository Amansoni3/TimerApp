// import React, { useState } from 'react'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button'
// import "../index.css"

// const TimerApp = () => {
//   const [number, setNumber] = useState('')
//   let msg = ''
  
//   const startTimer = () => {
//     if (number > 0)
//       setNumber(number - 1)
    
//   }
  
//   return (
//     <div className='container'>
//       <div className="box">
//         <h2>Timer App</h2>
//         <div className='textfield'>
//           <TextField fullWidth onChange={(event) => setNumber(event.target.value)} id="outlined-basic" label="Enter Number" variant="outlined" />
//         </div>
//         <div className='button'>
//           <Button fullWidth variant="contained" onClick={startTimer}>Start Timer</Button>
//         </div>
//         <div>
//           {number}
//           {msg}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TimerApp


import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../index.css";

const TimerApp = () => {
  const [number, setNumber] = useState('');
  const [countdown, setCountdown] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setMsg('Countdown finished!');
    }
  }, [countdown]);

  const startTimer = () => {
    if (number > 0) {
      setCountdown(number);
      setMsg('');
    }
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
          {msg}
        </div>
      </div>
    </div>
  );
};

export default TimerApp;
