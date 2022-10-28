import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import EcosystemPage from './pages/EcosystemPage';
import MarketplacePage from './pages/MarketplacePage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import NotFound from './pages/NotFound';
import Dock from './pages/HomePage/components/Dock';
import Undock from './pages/HomePage/components/Undock';
import SideBar from './components/SideBar';

function App() {
  return (
    <Layout>
      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Dock />} />
          <Route path="undock" element={<Undock />} />
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
