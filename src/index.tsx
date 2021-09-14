import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReduxProvider from './store/ReduxProvider';
import CustomThemeProvider from './themes/CustomThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
