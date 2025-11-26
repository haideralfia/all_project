import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './Login';
import { Dashboard } from './Dashboard';

const Home = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
  ]);
  return <div>{routes}</div>;
};

export default Home;
