import React, { useState, useEffect } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnLine] = useState();
  useEffetct(() => {}, []);

  console.log(navigator.onLine);
  return (
    <>
      <p>{navigator.onLine ? 'Online' : 'Offline'}</p>
    </>
  );
};

export default OnlineStatus;
