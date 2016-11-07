export default function genreReducer(state={}, action){
  switch(action.type){
    case 'SET_GENRE':
      console.log(action.payload)
      return action.payload
    default:
    return state
  }
}
