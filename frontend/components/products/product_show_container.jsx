import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { selectProductAttrs, selectProductReviews } from '../../reducers/selectors';
import { createReview } from '../../actions/review_actions';
import { addToCart } from '../../actions/cart_actions'
import ProductShow from './product_show';

const mSTP = (state, ownProps) => {

  let { products, attributes, reviews } = state.entities;
  let { id } = state.session;
  id > 0 ? id : id = 0
  
  let username;
  if (id > 0) {
    username = state.entities.users[id].first_name
  }

  let productId = ownProps.match.params.id;
  const product = products[productId];
  if (!product) return {};
  reviews = selectProductReviews(reviews, product);
  return {
    product,
    prodAttrs: selectProductAttrs(attributes, product),
    reviews,
    id,
    username
  }
};

const mDTP = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    fetchProducts: () => dispatch(fetchProducts()),
    addItem: (id) => dispatch(addToCart(id))
  }
}

export default connect(mSTP, mDTP)(ProductShow);