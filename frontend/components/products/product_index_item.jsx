import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => (
  <div className={`product-list-item`}>
      <Link to={`products/${props.product.id}`}>{props.product.name}</Link>
      <p>${props.product.price}0</p> 
  </div>
    );

export default ProductIndexItem;