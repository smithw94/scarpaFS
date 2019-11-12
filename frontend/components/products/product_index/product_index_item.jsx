import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const ProductIndexItem = (props) => (
  <div className={`product-list-item`}>
      <div className="thumbnail-container">
        <img className="thumbnail" src={`${props.product.photoUrl}`} />
      </div>
      <div className="item-info">
        <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
        <p>${props.product.price}0</p>
        <br/>
        <StarRatings 
          rating={parseInt(props.product.average_rating)}
          starRatedColor="black"
          numberOfStars={5}
          starDimension="13px"
          starSpacing="2px"
        />
      </div>
  </div>
    );

export default ProductIndexItem;