import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import EcosystemPage from './pages/EcosystemPage';
import MarketplacePage from './pages/MarketplacePage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import NotFound from './pages/NotFound';
import SideBar from './components/SideBar';

function App() {
  return (
    <Layout>
      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<h2>Dock</h2>} />
          <Route path="undock" element={<h2>Undock</h2>} />
        </Route>

        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
