import React from 'react'
import { useSelector } from 'react-redux'

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  return (
    <div>
      <h2>No. of Cakes - {numOfCakes}</h2>
      <button>Order Cake</button>
      <button>Restock Cakes</button>
    </div>
  )
}

export default CakeView
