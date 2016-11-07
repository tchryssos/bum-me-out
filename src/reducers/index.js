import { combineReducers } from 'redux';
import genreReducer from './genre_reducer'

 const rootReducer =  combineReducers({
   genre: genreReducer
 })

export default rootReducer;
