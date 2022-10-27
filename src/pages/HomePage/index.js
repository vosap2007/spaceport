import React from 'react';
import Dock from './components/Dock';
import Undock from './components/Undock';
import { NavLink, Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <br />
      <NavLink to="/">
        <Dock />
      </NavLink>
      <br />
      <NavLink to="/undock">
        <Undock />
      </NavLink>
      <Outlet />
    </>
  );
};

export default HomePage;
