import React from 'react';
import { Link } from 'react-router-dom';

import ProductSizeSelection from './product_size_selection';
import ReviewContainer from './review_container'

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProduct(this.props.match.params.id)
  }
  
  render() {
    // debugger

    let { product, prodAttrs, reviews, average_rating } = this.props;
    
    return(
      <div className="product-show-page">
        
        <div className="product-show">
          
          <div className="product-show-image">
            <img className="showImage" src={"https://i.imgur.com/5AQShJk.png"} />
          </div>
          
          <div className="product-show-info">
            
            <div className="product-show-name">
              <h3>{product.name}</h3>
            </div>
            
            <div className="product-show-price">
              <p>${product.price}0 USD</p>
            </div>

            <div className="product-rating">
              <h1>{product.average_rating}</h1>
              <p>Reviews Add Your Review</p>
            </div>
            
            <div className="product-show-description">
                {product.description}
            </div>

            <div className="product-button-selections">
                <ProductSizeSelection />
            </div>

          </div>
        </div>

        <div className="product-attrs">
          <div className="product-attrs-title">
            <h2>Technical Specifications</h2>
          </div>
          <div className="product-show-attrs">
              {
                prodAttrs.map(attr => (
                  <div className="product-show-attr"> {attr.attribute_name}: {attr.attribute_value}</div>
                ))
              }         
          </div>
        </div>

        <div className="reviewsSection">
          <h2>Reviews</h2>
          {reviews.map(review => (
            <div>
              {review.body}
            </div>
          ))}

          <ReviewContainer />
        </div>

        <div className="show-index-link">
          <Link to="/products">Back to products</Link>
        </div>
      
      </div>
    );
  }
}

export default ProductShow;