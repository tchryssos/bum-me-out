import { combineReducers } from 'redux';
import genreReducer from './genre-reducer'
import subgenresReducer from './subgenres-reducer'

 const rootReducer =  combineReducers({
   genre: genreReducer,
   subgenres: subgenresReducer
 })

export default rootReducer;
