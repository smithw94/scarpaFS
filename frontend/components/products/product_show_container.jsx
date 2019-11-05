import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';

import ProductShow from './product_show';

const mSTP = ({ entities }, oP) => {
  const product = selectProduct(entities, entities.products[oP.match.params.id]);
  return {
    productId: entities.products[oP.match.params.id],
    product
  }
};

const mDTP = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
})

export default connect(mSTP, mDTP)(ProductShow);