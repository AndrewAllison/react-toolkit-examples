import { lazy } from 'react';
import Loadable from '../components/common/loading/Loadable';

const Home = Loadable(lazy(() => import('../pages/home/Home')));

const routeDetails = [
  {
    path: '/',
    element: <Home />
  },
];

export default routeDetails;
