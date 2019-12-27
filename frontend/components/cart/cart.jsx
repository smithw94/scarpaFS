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

  render() {
    if (!this.props.cart) return null;
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
}

export default Cart;