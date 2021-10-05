import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/createStore';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Webfont from 'webfontloader';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

Webfont.load({
  google: {
    families: ["Muli: 300, 400, 500, 600, 700, 800, 900"]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
