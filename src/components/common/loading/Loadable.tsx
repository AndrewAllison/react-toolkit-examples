import { Suspense } from 'react';
import LoadingScreen from './LoadingScreen';

const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
