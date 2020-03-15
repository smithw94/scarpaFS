import React from 'react'
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.removeFromCart(e.target.value)
  }

  subTotal() {
    let total = 0;
    let { cart } = this.props;
    cart.map(product => total += parseInt(product.price));
    return total;
  }

  displayNone() {
    return (
      <div>
        <div className="empty-cart">
          Your cart is empty!
        </div>
        <div className="empty-cart">
          <Link to={`/products`}>Return to shop</Link>
        </div>
      </div>
    )
  }

  displayItems() {
    let { cart } = this.props;
    return(
      <div className="cart-container">
        {cart.map((item, i) => (
          <div className="cart-item">
            <div className="thumbnail-container thumb">
              <img className="thumbnail" src={`${item.pic}`} />
            </div>
            <div>
              <Link to={`/products/${item.id}`} style={{ textDecoration: 'none'}}>{item.name}</Link>
            </div>
            <div>
              Size: {item.size}
            </div>
            <div>
              ${item.price}0
            </div>
            <button value={i} type="submit" onClick={this.handleClick} className="session-submit">Remove</button>
          </div>
        ))}
        <div className="subtotal">
          Subtotal: ${this.subTotal()}.00
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.cart) return null;
    return(
      <div>
        {
          this.props.cart.length > 0 ? 
          this.displayItems() : 
          this.displayNone()
        }
      </div>
    )
  }
}

export default Cart;