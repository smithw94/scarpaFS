import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
// import { fetchAttributes } from '../../actions/attribute_actions';

import ProductIndex from './product_index';
import { selectProducts } from '../../reducers/selectors';

const mSTP = state => {
  // take my entire state of products and SELECT the product IDs specified by
  // my attributes product_ids, I can probably pass in the attribute value through
  // the params as a string and use that as a selector
  debugger
  // Just get the IDs of the products with the specified attribute value
  return {
    products: selectProducts(),

    // products: Object.values(state.entities.products),
    attributes: Object.values(state.entities.attributes)
  }
};

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  // fetchAttributes: () => dispatch(fetchAttributes())
});

export default connect(mSTP, mDTP)(ProductIndex);