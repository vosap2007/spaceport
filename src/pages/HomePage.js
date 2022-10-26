import { NavLink, Outlet } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <br />
      <NavLink to="/">Dock</NavLink>
      <br />
      <NavLink to="/undock">Undock</NavLink>
      <Outlet />
    </>
  );
}
