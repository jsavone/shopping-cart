import React from 'react'
import CartItem from './CartItem'

const cartItems = (props) => {
  let cartItemList = props.products.map(product => {
    let item = props.items.filter(item => item.product_id === product.id)
    return <CartItem key={product.id} product={product} item={item[0]} />
  })

  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItemList}
      </div>
    </div>
  )
}

export default cartItems
