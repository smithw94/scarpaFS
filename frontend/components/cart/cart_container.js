import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cart_actions';
import Cart from './cart';

const mSTP = state => {
  return {
    cart: state.entities.cart
  }
}

const mDTP = dispatch => ({
 removeFromCart: index => dispatch(removeFromCart(index))
});

export default connect(mSTP, mDTP)(Cart);