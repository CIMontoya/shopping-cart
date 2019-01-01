import React, { Component } from 'react'

class AddItem extends Component{

  options = () => {
    return this.props.products.map((item, idx) => {

      return <option key={item.id}>{item.name}</option>
    }
)
  }

  render() {
   return (
     <div className="container">
      <p>Total Price: ${this.props.total}</p>
      <p>{this.props.message}</p>
      <form className="form-group">
        <label>Quantity</label>
        <input type="number" className="form-control" onChange={this.props.quantity}/>
        <label>Products</label>
        <select className="form-control" onChange={this.props.name} defaultValue="select">
          <option disabled value="select">Choose a Product</option>
          {this.options()}
        </select>
        <button type="submit" onClick={this.props.addItem}>Submit</button>
      </form>
    </div>
   )
 }
}

export default AddItem
