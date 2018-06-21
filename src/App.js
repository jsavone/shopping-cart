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

  render() {

    return (
      <div className="App">
        <CartHeader />
        <CartItems products={this.state.products} items={this.state.items}/>
        <CartFooter copyright={'2018'} />
      </div>
    );
  }

}

export default App;
