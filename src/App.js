import React from 'react';
import { AppRoutes } from 'routes';
import Menu from './components/menu';

const App = () => (
  <div className="container-wrap">
    <Menu />
    <AppRoutes />
  </div>
);

export default App;
