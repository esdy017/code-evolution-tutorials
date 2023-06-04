// store
// 1. holds app state
// 2. allow access to state via getState()
// 3. allow state to be updated via dispatch(action)
// 4. registers listeners via subscribe(listener)
// 5. unregisters listeners via function returned by subscribe(listener)
const redux = require('redux')
const createStore = redux.createStore

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

// store
// 1.
const store = createStore(reducer)

// 2.
console.log('Initial State: ', store.getState())

// 4.
// store.subscribe(() => console.log('Updated State: ', store.getState()))
const unsubscribe = store.subscribe(() =>
  console.log('Updated State: ', store.getState())
)

// 3.
store.dispatch(cakeOrder())
store.dispatch(cakeOrder())
store.dispatch(cakeOrder())

// 5.
unsubscribe()
