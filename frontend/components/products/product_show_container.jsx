import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';

import ProductShow from './product_show';

const mSTP = (state, oP) => {
  return {
    product: state.entities.products[oP.match.params.id],
  }
};

const mDTP = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  }
}

export default connect(mSTP, mDTP)(ProductShow);