/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Instructions from './instructions';

const Routes = [
  {
    id: 'home',
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: 'instructions',
    name: 'Instructions',
    path: '/instructions',
    component: Instructions,
    children: [
      {
        id: 'create',
        name: 'Create New Instruction',
        path: '/instructions/create',
        component: Instructions,
      },
      {
        id: 'setup',
        name: 'Setup New Instruction',
        path: '/instructions/setup',
        component: Instructions,
        children: [],
      },
      {
        id: 'verify',
        name: 'Verify New Instruction',
        path: '/instructions/verify',
        component: Instructions,
        children: [],
      },
    ],
  },
  {
    id: 'ongoing',
    name: 'Ongoing Matters',
    path: '/ongoing',
    component: Instructions,
    children: [
      {
        id: 'mail-list',
        name: 'Ongoing Mail List',
        path: '/ongoing/mail-list',
        component: Instructions,
        children: [],
      },
      {
        id: 'file-handler',
        name: 'Covering File Handler',
        path: '/ongoing/file-handler',
        component: Instructions,
        children: [],
      },
    ],
  },
];

export function AppRoutes() {
  const buildRoutes = (routes = Routes) => (
    <Switch>
      {routes.map(route => (
        <Route
          key={route}
          exact={route.exact || false}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
  return <>{buildRoutes()}</>;
}

export default Routes;
