import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function Instructions() {
  const match = useRouteMatch({
    path: '/instructions/:action',
    strict: true,
    sensitive: true,
  });
  return <h1>Hello Instructions {match && match.params.action} </h1>;
}
