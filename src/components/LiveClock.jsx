import React, { useState } from 'react';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  console.log(time);
  return <div>LiveClock</div>;
};

export default LiveClock;
