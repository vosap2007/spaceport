import React from 'react';
import Header from '../Header';

const Layout = ({ isAuthorized, setIsAuthorized, children }) => {
  return (
    <div className="layout">
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
