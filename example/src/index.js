require('./index.html');
require('leaflet/dist/leaflet.css');
require('leaflet/dist/images/marker-icon.png');
require('leaflet/dist/images/marker-icon-2x.png');
require('leaflet/dist/images/marker-shadow.png');
const L = require('leaflet');
L.Icon.Default.imagePath = './';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutablejs';
import { reducers as lmapReducers } from 'react-redux-leaflet';

import App from './App';

const simpleReduxStore = createStore(combineReducers(
  Object.assign(
    {},
    lmapReducers
    //
  )
));

ReactDOM.render(
  <Provider store={simpleReduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
