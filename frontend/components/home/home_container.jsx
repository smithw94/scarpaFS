import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';



import Home from './home';

const mSTP = state => ({
  attributes: Object.values(state.entities.attributes),
  products: Object.values(state.entities.products),
  firstImage: 'First Image goes here'
});

const mDTP = dispatch => {
  
  return {

  fetchProducts: () => dispatch(fetchProducts())
  
  }
};

export default connect(mSTP, mDTP)(Home);