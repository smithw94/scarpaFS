import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { fetchAttributes } from '../../actions/attribute_actions';

import ProductIndex from './product_index';

const mSTP = state => ({
  products: Object.values(state.entities.products),
  attributes: Object.values(state.entities.attributes)
});

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchAttributes: () => dispatch(fetchAttributes())
});

export default connect(mSTP, mDTP)(ProductIndex);