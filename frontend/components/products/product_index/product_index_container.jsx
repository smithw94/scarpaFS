import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/product_actions';
// import { selectAttr, selectProducts } from '../../../reducers/selectors';


import ProductIndex from './product_index';

const mSTP = (state, ownProps) => {
  let { products, attributes } = state.entities;
  // let productIds = [];
  // let filter = parseInt(ownProps.location.search.split('?').filter(String));
  
  // if (filter > 0) productIds = selectAttr(attributes, filter);
  // productIds.length !== 0 ? products = selectProducts(products, productIds) : products
  
  return {
    products: Object.values(products),
    attributes: Object.values(attributes)
  }
};

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mSTP, mDTP)(ProductIndex);