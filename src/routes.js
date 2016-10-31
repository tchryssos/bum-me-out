import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App.js';
import GenreBar from "./components/genre-bar"


export default (
  <Route path="/" component={App} >
    <IndexRoute component={GenreBar}/>
  </Route>
)
