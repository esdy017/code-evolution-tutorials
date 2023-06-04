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
