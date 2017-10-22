// Absolute imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// NPM imports
import ReactDOM from 'react-dom';
import React from 'react'; // eslint-disable-line no-unused-vars

// Component imports
import MainApp from './MainApp.jsx';

// App Styles
// require('./styles/app.scss');

ReactDOM.render(
  <MainApp />,
  document.getElementById('app'),
);
