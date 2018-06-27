import React from 'react'


const cartItem = (props) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{props.product.name}</div>
        <div className="col-md-2">{'$'+(props.product.priceInCents/100).toFixed(2)}</div>
        <div className="col-md-2">{props.item.quantity}</div>
      </div>
    </div>
  )
}

export default cartItem
