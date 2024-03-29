import axios from 'axios';
import { useState, useEffect } from 'react';
import {RenderWatchDisplay} from './timer-display';
import './timer.css'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  useEffect(() => {
    fetchData()
  }, []);


  const fetchData=()=>{
    axios.get('list.json').then(res=>{
      console.log(res)
    })
  }

  


  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      {/* <div id="display">
        <span>{("0" + ~~((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + ~~((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div> */}
      <RenderWatchDisplay time={time}/>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default Timer;