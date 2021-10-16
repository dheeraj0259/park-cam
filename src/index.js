import React from 'react';
import ReactDOM from 'react-dom';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
    <GlobalStyles />
    <App />
    </ThemeConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
