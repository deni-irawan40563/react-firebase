import actionsList from '../Actions'

const initialState = {
  count : "aku"
}

const reducer = (state = initialState, actions) => {
  if(actions.type ===  "ChangeCount" ){
    return {
      ...initialState,
      count : actions.value
    }
  }
  return state
}

export default reducer