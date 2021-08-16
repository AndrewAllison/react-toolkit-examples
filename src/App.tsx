import React from 'react';
import { useRoutes } from 'react-router-dom';
import Main from './routes/Main';
import routeDetails from './routes/route-details';

function App() {
  const content = useRoutes(routeDetails);
  return (
    <Main>
      {content}
    </Main>
  );
}

export default App;
