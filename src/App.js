import { NavLink, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import MarketplacePage from './pages/MarketplacePage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HomePage</NavLink>
          </li>
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

        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
