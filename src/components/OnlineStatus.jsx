import React from 'react';

const OnlineStatus = () => {
  console.log(navigator.onLine);
  return (
    <>
      <p>{navigator.onLine ? 'Online' : 'Offline'}</p>
    </>
  );
};

export default OnlineStatus;
