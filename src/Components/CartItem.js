import React from 'react'


const cartItem = (props) => {
 let formattedPrice = props.product.priceInCents.toString().split('')
 formattedPrice.splice(formattedPrice.length-2,0,'.')
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{props.product.name}</div>
        <div className="col-md-2">{'$'+formattedPrice.join('')}</div>
        <div className="col-md-2">{props.item.quantity}</div>
      </div>
    </div>
  )
}

export default cartItem
