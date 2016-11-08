export default function subgenresReducer(state="none", action){
  switch(action.type){
    case 'SET_FILTERS':
      let stateArr=null

      if (state==="none"){
        stateArr=[]
      } else {
        stateArr=state.split(", ")
      }

      if (stateArr.includes(action.payload)){
        stateArr.splice(stateArr.indexOf(action.payload),1)
      } else {
        stateArr.push(action.payload)
      }

      if (stateArr.length===0){
        return "none"
      } else {
        return stateArr.join(", ")
      }
    default:
    return state
  }
}
