import React, { useState } from 'react';

const OnlineStatus = () => {
  const [isOnline, setIsOnLine] = useState(navigator.onLine);
  const handleOnline = () => {
    setIsOnLine(true);
  };
  const handleOffline = () => {
    setIsOnLine(false);
  };
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return (
    <>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
};

export default OnlineStatus;
