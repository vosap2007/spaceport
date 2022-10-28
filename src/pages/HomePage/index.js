import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home__title">Home</h1>
      <div className="home__menu">
        <NavLink to="/">Dock</NavLink>
        <NavLink to="/undock">Undock</NavLink>
      </div>
      <div className="home__content">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
