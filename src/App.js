import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/CartHeader'
import CartFooter from './Components/CartFooter'
import CartItems from './Components/CartItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems />
        <CartFooter copyright={'2018'} />
      </div>
    );
  }
}

export default App;
