import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
// import { fetchAttributes } from '../../actions/attribute_actions';


import Home from './home';

const mSTP = state => ({
  firstImage: 'First Image goes here'
});

const mDTP = dispatch => ({
  toProduct: 'Link to products page should go here',
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mSTP, mDTP)(Home);