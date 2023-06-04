// type of the action string
const CAKE_ORDERED = 'CAKE_ORDERED'

// action creator function
function cakeOrder() {
  // returns an action object
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  }
}

// state
const initialState = {
  numOfCakes: 10,
  //   anotherProperty: 0,
}

// reducers
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}
