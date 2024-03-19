import React, { useEffect, useState } from 'react'

const TimerComponent = ({targetTime}) => {

  const calculateTimeLeft = () => {
    
    const now = new Date();
    const targ = new Date(targetTime);
    const difference = targ - now;
    
    if (difference < 0) {
      return [{
        days: '00',
        hours: '00',
        minutes : '00',
        seconds: '00'
      }];
    }

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');
    return [{
      days,
      hours,
      minutes,
      seconds
    }];
    // return `${days}:${hours}:${minutes}:${seconds}`
  };


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetTime]);

  return (
    <>
        <div className="tymBox">
          <div className="timeCount">
            {timeLeft?.[0]?.days} <br /> <span>Days</span>
          </div> <span className='tymDot'>:</span>
          <div className="timeCount">
            {timeLeft?.[0]?.hours} <br /> <span>Hours</span>
          </div> <span className='tymDot'>:</span>
          <div className="timeCount">
            {timeLeft?.[0]?.minutes} <br /> <span>Min</span>
          </div><span className='tymDot'>:</span>
          <div className="timeCount">
            {timeLeft?.[0]?.seconds} <br /> <span>Sec</span>
          </div>
        </div>
      </>
  )
}

export default TimerComponent