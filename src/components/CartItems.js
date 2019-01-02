import React, { Component } from 'react'
import Item from './CartItem'

class Items extends Component {
  render() {
    const scrollArea = {
      width: "1110px",
      height: "344px",
      overflow: "scroll"
    }

    return (
      <div className="container">
        <h1 className="mt-3">Cart Items</h1>
        <div className="list-group mt-4">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8"><strong>Product</strong></div>
              <div className="col-md-2"><strong>Price</strong></div>
              <div className="col-md-2"><strong>Quantity</strong></div>
            </div>
          </div>
          <div  style={scrollArea} className="scroll">
          {this.props.cartItems.map((item, idx) => {
            return (
              <Item
                key = {idx}
                product = {item.product.name}
                price = {item.product.price}
                quantity = {item.quantity}/>
            )
          })}
          </div>
        </div>
      </div>
    )
  }
}

export default Items
