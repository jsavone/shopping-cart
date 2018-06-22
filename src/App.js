import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/CartHeader'
import CartFooter from './Components/CartFooter'
import CartItems from './Components/CartItems'

class App extends Component {
  state = {
    products: [],
    items: []
  }

  async componentDidMount() {
    const productsResponse = await fetch('http://localhost:8082/api/products')
    const productsJson = await productsResponse.json()
    const itemsResponse = await fetch('http://localhost:8082/api/items')
    const itemsJson = await itemsResponse.json()

    this.setState({products: productsJson, items: itemsJson})
  }

  createItem = async (quantity, itemId) => {

    let addedItem = {
      "product_id": Number(itemId),
      "quantity": Number(quantity),
      "id": this.state.items.length+1
    }

    const itemResponse = await fetch('http://localhost:8082/api/items', {
      method: 'POST',
      body: JSON.stringify(addedItem),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

    const itemJson = await itemResponse.json()

    this.setState({items: [...this.state.items, itemJson]})
  }

  render() {

    return (
      <div className="App">
        <CartHeader />
        <CartItems createItem={this.createItem} products={this.state.products} items={this.state.items}/>
        <CartFooter copyright={'2018'} />
      </div>
    );
  }

}

export default App;
