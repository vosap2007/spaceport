import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import side_bar_logo from '../../assets/images/Group.svg';
import home from '../../assets/images/side_bar/home.svg';
import ecosystem from '../../assets/images/side_bar/ecosystem.svg';
import marketplace from '../../assets/images/side_bar/marketplace.svg';
import settings from '../../assets/images/side_bar/settings.svg';
import help from '../../assets/images/side_bar/help.svg';

const dataSideBar = [
  { route: '/', img: home, name: 'Home' },
  { route: '/ecosystem', img: ecosystem, name: 'Ecosystem' },
  { route: '/marketplace', img: marketplace, name: 'Marketplace' },
  { route: '/settings', img: settings, name: 'Settings' },
  { route: '/help', img: help, name: 'Help?' },
];

const SideBar = () => {
  const location = useLocation().pathname;

  return (
    <div className="side_bar">
      <p className="side_bar__logo">
        MY
        <img src={side_bar_logo} />
        CCOUNT
      </p>

      <nav>
        <ul className="side_bar__list">
          {dataSideBar.map(({ route, img, name }) => {
            const isSideBar =
              (location === '/' || location === '/undock') && name === 'Home';
            return (
              <li key={name}>
                <NavLink
                  to={route}
                  className={({ isActive }) =>
                    isSideBar || isActive
                      ? 'side_bar__link side_bar__link__selected'
                      : 'side_bar__link '
                  }
                  end
                >
                  <ReactSVG src={img} />
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
