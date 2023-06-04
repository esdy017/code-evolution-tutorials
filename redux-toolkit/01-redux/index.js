// store
// 1. holds app state
// 2. allow access to state via getState()
// 3. allow state to be updated via dispatch(action)
// 4. registers listeners via subscribe(listener)
// 5. unregisters listeners via function returned by subscribe(listener)
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

// type of the action string
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

// action creator function
function orderCake() {
  // returns an action object
  return {
    type: CAKE_ORDERED,
    payload: 1,
  }
}
function restockCake(qty = 1) {
  // returns an action object
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
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
    case CAKE_RESTOCKED:
      return {
        ...state,
        // numOfCakes: state.numOfCakes + 5,
        numOfCakes: state.numOfCakes + action.payload,
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
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(5))
// store.dispatch(orderCake())
const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(5)
actions.orderCake()

// 5.
unsubscribe()
