import React from 'react'
import { useSelector } from 'react-redux'

const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  return (
    <div>
      <h2>No. of IceCreams - {numOfIceCreams}</h2>
      <button>Order IceCream</button>
      <button>Restock IceCreams</button>
    </div>
  )
}

export default IceCreamView
