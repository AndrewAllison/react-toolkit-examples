import React, { lazy } from 'react';
import Loadable from '../components/common/loading/Loadable';

const Home = Loadable(lazy(() => import('../pages/home/Home')));
const Login = Loadable(lazy(() => import('../pages/auth/Login')));

const routeDetails = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routeDetails;
