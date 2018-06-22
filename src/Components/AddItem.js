import React, { Component } from 'react'
import ItemDropdown from './ItemDropdown'

class AddItem extends Component {
  state = {
    quantity: 0,
    id: 1
  }

  quantityHandler = (event) => {
    this.setState({quantity: event.target.value})
  }

  idHandler = (event) => {
    this.setState({id: event.target.value})
  }

  render() {
    console.log(this.state)
    let productDrop = this.props.products.map(product => <ItemDropdown key={product.id} product={product} />)

    return (
      <div>
        <p className="cartLabels">Quantity</p>
        <input className="col-md-12 form-control" onChange={this.quantityHandler} type="number" value={this.state.quantity} />
        <p className="cartLabels">Products</p>
        <select className="col-md-12 form-control" onChange={this.idHandler}>
          {productDrop}
        </select>
        <button onClick={() => this.props.createItem(this.state.quantity, this.state.id)} className="btn btn-primary">Submit</button>
      </div>

    )
  }
}

export default AddItem
