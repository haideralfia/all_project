import React, { useEffect, useState } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24h, setIs24h] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const changeTime = () => {
    const h = time.getHours();
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    if (is24h) {
      const hour = String(h).padStart(2, '0');
      return `${hour}:${minutes}:${seconds}`;
    } else {
      const meridiem = h >= 12 ? 'PM' : 'AM';
      const hour12 = String(h % 12 || 12).padStart(2, '0'); // Convert to 12-hour format
      return `${hour12}:${minutes}:${seconds} ${meridiem}`;
    }
  };

  return (
    <div>
      <p>Live LiveClock</p>

      <p>{changeTime()}</p>
      <button
        onClick={() => {
          setIs24h(!is24h);
        }}
      >
        {is24h ? '12h format' : '24h format'}
      </button>
    </div>
  );
};

export default LiveClock;
