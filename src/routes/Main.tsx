import { Paper } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/common/header/Header';
import Home from '../pages/home/Home';
import routeDetails from './route-details';

// const useStyles = makeStyles((theme) => {
//   return {
//     main: {
//       height: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     page: {
//       height: '100%',
//       [theme.breakpoints.down('sm')]: {
//         //  backgroundColor: theme.palette.primary.main,
//         padding: theme.spacing(1),
//         marginTop: '56px'
//       },
//       [theme.breakpoints.up('md')]: {
//         // backgroundColor: theme.palette.primary.main,
//         padding: theme.spacing(2),
//         marginTop: '64px'
//       },
//       [theme.breakpoints.up('lg')]: {
//         // backgroundColor: theme.palette.primary.main,
//         padding: theme.spacing(2),
//         marginTop: '64px'
//       },
//     },
//     offset: theme.mixins.toolbar,
//   };
// });

const Main = () => {
  // const classes = useStyles();
  return <div className={'main'}>
    <Header/>
    <Paper className={'page'}>
      <BrowserRouter>
        <Routes>
          <Route path={routeDetails.home} element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Paper>
  </div>;
};

export default Main;
