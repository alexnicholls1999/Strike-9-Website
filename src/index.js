import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getFirestore, createFirestoreInstance, reduxFirestore} from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "./firebase/utils";
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducers/rootReducer';

const middleware = [thunk.withExtraArgument({getFirebase, getFirestore})];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), reduxFirestore(firebase))
);

const rrfProps = {
  firebase,
  config: firebase,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const root = document.getElementById("root")

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </Router>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();