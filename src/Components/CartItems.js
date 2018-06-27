import React from 'react'
import CartItem from './CartItem'
import AddItem from './AddItem'

const cartItems = (props) => {
  let cartTotal = 0
  let cartItemList = props.items.map(item => {
    let product = props.products.filter(product => item.product_id === product.id)
    cartTotal+=(product[0].priceInCents*item.quantity)
    return <CartItem key={item.id} product={product[0]} item={item} />
  })
  cartTotal = (cartTotal/100).toFixed(2)
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
      <p>Cart Total: ${cartTotal}</p>
      <AddItem createItem={props.createItem}products={props.products}/>
    </div>
  )
}

export default cartItems
