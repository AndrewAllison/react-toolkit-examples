import React, { PropsWithChildren } from 'react';
import { Paper } from '@material-ui/core';

import Header from '../components/common/header/Header';

const Main = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return <div className='main'>
    <Header/>
    <Paper className='page'>
      {children}
    </Paper>
  </div>;
};

export default Main;
