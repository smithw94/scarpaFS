import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => (
  <li>
    <Link to={`products/${props.product.id}`}>{props.product.name}</Link>
  </li>
);

export default ProductIndexItem;