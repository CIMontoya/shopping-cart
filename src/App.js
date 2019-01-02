import React, { Component } from 'react'
import header from './components/CartHeader'
import footer from './components/CartFooter'
import Items from './components/CartItems'
import AddItem from './components/AddItem'


class App extends Component {
  constructor(){
    super()
    this.state = {
      cartItemsList: [],
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      name: "",
      price: 0,
      quantity: 0,
      id: 0,
      total: 0,
      message: ""
    }
  }

  storeQuantity = (event) => {
    this.setState({
      quantity: +event.target.value
    })
  }

  namePriceAndId = (event) => {
    this.setState({
      name: event.target.value
    })
    let item = this.state.products.filter(item => item.name === event.target.value)
    this.setState({
      price: item[0].priceInCents / 100,
      id: item[0].id
    })
  }

  addItem = (event) => {
    event.preventDefault()
    if(this.state.name === "") {
      this.setState({
        message: "No Item Selected"
      })
      return
    } else if(this.state.quantity === 0) {
      this.setState({
        message: "Please Input A Quantity"
      })
      return
    }
    let newItem = {
      product: {
        id: this.state.id,
        name: this.state.name,
        price: this.state.price * this.state.quantity
      },
      quantity: this.state.quantity
    }
    let prices = this.state.cartItemsList.map(item => item.product.price)
    let total = prices.reduce((acc, cur) => {
      return acc + cur
    }, 0)
    total += newItem.product.price
    this.setState({
      cartItemsList: this.state.cartItemsList.concat([newItem]),
      total: total.toFixed(2),
      message: ""
    })
  }

  scrollToBottom(){
    var element = document.querySelector(".scroll")
    element.scrollTop = element.scrollHeight
  }

  componentDidUpdate(){
    this.scrollToBottom()
  }

  render() {
    return (
      <div>
        {header()}
        <Items
          cartItems = {this.state.cartItemsList}/>
        <AddItem
          products = {this.state.products}
          name = {this.namePriceAndId}
          quantity = {this.storeQuantity}
          total = {this.state.total}
          addItem = {this.addItem}
          addTotal = {this.addTotal}
          message = {this.state.message}/>
        {footer(2016)}
      </div>
    )
  }
}

export default App
