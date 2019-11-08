import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { fetchAttribute } from '../../actions/attribute_actions';
import { selectProduct } from '../../reducers/selectors';

import ProductShow from './product_show';

const mSTP = (state, oP) => {
  let { products } = state.entities;
  let productId = oP.match.params.id

  const product = products[productId];
  let prodAttr = [];

  // let attrVals = Object.values(attributes);

  
  // attrVals.forEach(attrVal => (
  //   attrVal.includes(productId) ? prodAttr.push(attrVal) : null
  // ))
 
  return {
    product
    // prodAttr
  }
};

const mDTP = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    // fetchAttribute: id => dispatch(fetchAttribute(id))
  }
}

export default connect(mSTP, mDTP)(ProductShow);