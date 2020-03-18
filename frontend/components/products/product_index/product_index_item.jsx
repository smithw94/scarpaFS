import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import StarRatings from 'react-star-ratings';

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefefault();
  }

  render () {
    return (
    <div className="product-item">
      <Link to={`/products/${this.props.product.id}`} style={{ textDecoration: 'none'}}>
      <div className={`product-list-item`} >
          <div className="thumbnail-container">
            <img className="thumbnail" src={`${this.props.product.photoUrls[0]}`} />
          </div>
          <div className="item-info">
            {this.props.product.name}
            <p>${this.props.product.price}0</p>
            <StarRatings 
              rating={parseInt(this.props.product.average_rating) || 0 }
              starRatedColor="black"
              numberOfStars={5}
              starDimension="13px"
              starSpacing="2px"
            />
          </div>
      </div>
      </Link>
    </div>

    );
  }
}

export default ProductIndexItem;