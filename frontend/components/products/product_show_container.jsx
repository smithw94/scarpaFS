import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { fetchAttribute } from '../../actions/attribute_actions';
import { selectProductAttrs, selectProductReviews } from '../../reducers/selectors';

import ProductShow from './product_show';


// I want to select all reviews of a product
const mSTP = (state, ownProps) => {
  let { products, attributes, reviews } = state.entities;
  
  let productId = ownProps.match.params.id;
  const product = products[productId];
  reviews = selectProductReviews(reviews, product);

  return {
    product,
    prodAttrs: selectProductAttrs(attributes, product),
    reviews
  }
};

const mDTP = dispatch => {
  return {
    // fetchProduct: id => dispatch(fetchProduct(id)),
    // fetchAttribute: id => dispatch(fetchAttribute(id))
  }
}

export default connect(mSTP, mDTP)(ProductShow);