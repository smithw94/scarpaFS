import React from 'react';
import { connect } from 'react-redux';


import Home from './home';

const mSTP = state => ({
  firstImage: 'First Image goes here'
});

const mDTP = dispatch => ({
  toProduct: 'Link to products page should go here'
});

export default connect(mSTP, mDTP)(Home);