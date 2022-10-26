import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
          {/* <li>
            <NavLink to="/home/dock">Dock</NavLink>
          </li> */}
          <li>
            <NavLink to="/marketplace">MarketplacePage</NavLink>
          </li>
          <li>
            <NavLink to="/settings">SettingsPage</NavLink>
          </li>
          <li>
            <NavLink to="/help">HelpPage</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<h2>Dock</h2>} />
          <Route path="undock" element={<h2>Undock</h2>} />
        </Route>

        <Route path="/marketplace" element={<h2>MarketplacePage</h2>} />
        <Route path="/settings" element={<h2>SettingsPage</h2>} />
        <Route path="/help" element={<h2>HelpPage</h2>} />
        <Route path="*" element={<h2>NotFound</h2>} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Routes>
<Route path="/" element={<h2>Layout</h2>}>
  <Route index element={<h2>HomePage</h2>}>
    <Route index element={<h2>Dock</h2>} />
    <Route path="undock" element={<h2>Undock</h2>} />
  </Route>
  <Route path="marketplace" element={<h2>MarketplacePage</h2>} />
  <Route path="settings" element={<h2>SettingsPage</h2>} />
  <Route path="help" element={<h2>HelpPage</h2>} />
  <Route path="*" element={<h2>NotFound</h2>} />
</Route>
</Routes> */
}
