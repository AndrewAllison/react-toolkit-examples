import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '../components/common/Loading';
import store, { persistor } from './store';

const ReduxProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<Loading />}
    >
      {children}
    </PersistGate>
  </Provider>;
};

export default ReduxProvider;
