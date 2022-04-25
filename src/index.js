import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import FirebaseAuthProvider from './firebase/FirebaseAuthProvider';


export const loadIcons = () => {
  library.add(faStar, farStar);
};

WebFont.load({
  google: {
    families: ['Muli:300,400,500,600,700,800,900']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <FirebaseAuthProvider>
          <App />
        </FirebaseAuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
