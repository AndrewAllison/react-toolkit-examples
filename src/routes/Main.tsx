import { useTheme } from '@material-ui/core/styles';
import React, { PropsWithChildren } from 'react';

import Header from '../components/common/header/Header';

const Main = (props: PropsWithChildren<any>) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <div className="main">
      <Header />
      <div className="page" style={{ backgroundColor: theme.palette.background.paper }}>
        {children}
      </div>
    </div>
  );
};

export default Main;
