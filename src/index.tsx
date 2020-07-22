import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import AppContext, { initialState } from "./context/AppContext";

const { Provider } = AppContext;

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider value= { {state :initialState}  } >
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
