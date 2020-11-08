import React from 'react';
import AppProvider from './context';

import Routes from './routes';
import GlobalStyles from './styles/Global';

const src: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  );
};

export default src;
