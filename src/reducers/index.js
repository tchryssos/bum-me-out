import { combineReducers } from 'redux';
import fetchSadnessReducer from './set_sadness_reducer.js'

 const rootReducer =  combineReducers({
   sadness: fetchSadnessReducer
 })

export default rootReducer;
