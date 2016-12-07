import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App.js';
import BummerSlider from "./components/bummer-slider"


export default (
  <Route path="/" component={App} >
    <IndexRoute component={BummerSlider}/>
  </Route>
)
