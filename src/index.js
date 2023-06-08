import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { store } from 'redux/store';

// import './index.css';

const theme = {
  colors: {
    primary: '#232323',
    accent: '#6085d3',
    white: '#fdfdfd',
    black: '#000000',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
