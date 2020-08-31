// this will allow the use of bootstrap classes
import 'bootstrap/dist/css/bootstrap.min.css';
// if you also need to use Bootstrap’s JavaScript components in your app, you’ll need to install jquery and popper.js
// https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
