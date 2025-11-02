import React, { useEffect, useState } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://randomuser.me/api');
    const response = await data.json();
    const userData = response?.results[0];
    setUser(userData);
  };

  return (
    <>
      <h1>Random user</h1>
      {user ? (
        <div>
          <p>Name : {user.name.first + ' ' + user.name.last}</p>
          <p>Email : {user.email}</p>
          <img src={user.picture.medium} alt="" />
          <button onClick={fetchData}>Next</button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default RandomUser;
