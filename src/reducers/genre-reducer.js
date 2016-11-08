export default function genreReducer(state='none', action){
  switch(action.type){
    case 'SET_GENRE':
      return action.payload
    default:
    return state
  }
}
