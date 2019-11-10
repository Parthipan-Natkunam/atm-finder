import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers/rootReducer";

const reduxExtension =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  rootReducer,
  compose(
      reduxExtension
  )
);

const AppContainer = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(AppContainer, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
