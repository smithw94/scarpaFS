import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
import { selectProductIds, selectProducts } from '../../../reducers/selectors';


import ProductIndex from './product_index';

const mSTP = (state, ownProps) => {
  let { products, attributes } = state.entities;
  let productIds = [];
  let filter = parseInt(ownProps.location.search.split('?').filter(String));
  
  if (filter > 0) productIds = attributes[filter].product_ids;
  
  products = productIds.length !== 0 ? selectProducts(products, productIds) : {'hi' : 'No items fount :('}
  return {
    products: Object.values(products),
    attributes: Object.values(attributes),
    filter
  }
};

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mSTP, mDTP)(ProductIndex);