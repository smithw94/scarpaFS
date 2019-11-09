import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
// import { fetchAttributes } from '../../actions/attribute_actions';


import Home from './home';

const mSTP = state => ({
  attributes: Object.values(state.entities.attributes),
  products: Object.values(state.entities.products),
  firstImage: 'First Image goes here'
});

const mDTP = dispatch => {
  
  return {
  // toProduct: 'Link to products page should go here',
  fetchProducts: () => dispatch(fetchProducts())
  
  }
};

export default connect(mSTP, mDTP)(Home);