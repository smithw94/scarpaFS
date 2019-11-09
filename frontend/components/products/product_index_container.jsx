import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { selectAttr, selectProducts } from '../../reducers/selectors';
// import { fetchAttributes } from '../../actions/attribute_actions';

import ProductIndex from './product_index';

const mSTP = (state, ownProps) => {
  // take my entire state of products and SELECT the product IDs specified by
  // my attributes product_ids, I can probably pass in the attribute value through
  // the params as a string and use that as a selector
  
  // Just get the IDs of the products with the specified attribute value
  let { products, attributes } = state.entities;
  
  let filter = parseInt(ownProps.location.search.split('?').filter(String));
  

  let productIds = selectAttr(attributes, filter);
  

  products = selectProducts(products, productIds);
  debugger
  return {
    // products: selectProducts(),
    products,
    attributes
    
  }
};

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  // fetchAttributes: () => dispatch(fetchAttributes())
});

export default connect(mSTP, mDTP)(ProductIndex);