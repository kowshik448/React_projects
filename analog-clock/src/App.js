
import { useEffect, useState } from 'react';
import './App.css';
import AnalogClock from './components/clock';

function App() {
  const [time , setTime] = useState({
    secondsRatio:0,
    minRatio:0,
    hoursRatio:0
  })

  setInterval(()=>{
    setClockTime();
  },1000);

  useEffect(()=>{
    setClockTime();
  },[]);
  
  function setClockTime(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/60;
    const minutes = (seconds + currentDate.getMinutes())/60;
    const hours = (minutes + currentDate.getHours())/12;

    setTime({
      secondsRatio:seconds,
      minRatio:minutes,
      hoursRatio:hours
    })
  }

  return (
    <div className="App">
      <AnalogClock time={time}/>
    </div >
  );
}

export default App;
