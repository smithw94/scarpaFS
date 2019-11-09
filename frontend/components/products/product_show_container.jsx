import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { fetchAttribute } from '../../actions/attribute_actions';
import { selectProductAttrs } from '../../reducers/selectors';

import ProductShow from './product_show';

const mSTP = (state, ownProps) => {
  // debugger
  let { products, attributes } = state.entities;
  

  let productId = ownProps.match.params.id;
  const product = products[productId];
  
  return {
    product,
    prodAttrs: selectProductAttrs(attributes, product)
  }
};

const mDTP = dispatch => {
  return {
    // fetchProduct: id => dispatch(fetchProduct(id)),
    // fetchAttribute: id => dispatch(fetchAttribute(id))
  }
}

export default connect(mSTP, mDTP)(ProductShow);