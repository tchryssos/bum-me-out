export default function genreReducer(state={}, action){
  switch(action.type){
    case 'SET_GENRE':
      return action.payload
    default:
    return state
  }
}
