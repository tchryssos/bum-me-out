export default function fetchSadnessReducer(state=[], action){
  switch(action.type){
    case 'SET_SADNESS':
      return action.payload
    default:
      return state
  }
}
