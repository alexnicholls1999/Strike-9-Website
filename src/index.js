import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import Webfont from "webfontloader";
import StoreProvider from './react-context/StoreContext';
import { store } from './firebase/utils';
import reportWebVitals from './reportWebVitals';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Webfont.load({
  google: {
    families: ["Muli: 300, 400, 500, 600, 700, 800, 900"]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
