import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import AutorisationPage from './pages/Autorisation';
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
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Layout isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}>
      {isAuthorized && <SideBar />}

      <Routes>
        <Route
          path="/"
          element={
            isAuthorized ? (
              <HomePage />
            ) : (
              <AutorisationPage
                isAuthorized={isAuthorized}
                setIsAuthorized={setIsAuthorized}
              />
            )
          }
        >
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
