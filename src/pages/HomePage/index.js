import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home__title">Home</h1>
      <div className="home__menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'home__link home__link_active' : 'home__link'
          }
          end
        >
          Dock
        </NavLink>
        <NavLink
          to="/undock"
          className={({ isActive }) =>
            isActive ? 'home__link home__link_active' : 'home__link'
          }
          end
        >
          Undock
        </NavLink>
      </div>
      <div className="home__content">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
