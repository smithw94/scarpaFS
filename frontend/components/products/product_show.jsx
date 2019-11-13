import React from 'react';
import { Link } from 'react-router-dom';

import ProductSizeSelection from './product_size_selection';
import ReviewContainer from './review_container'
import ReviewListContainer from './review_list_container';
import StarRatings from 'react-star-ratings';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.myDivToFocus = React.createRef();
  
    this.state = {
      rating: 5,
      body: ''
    }
    
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  update(field) {
    this.setState(field)
  }

  handleSubmit(e) {
    e.preventDefault();
    let reviewSubmit = Object.assign(
      {}, this.state, { product_id: this.props.product.id }
    );
    this.props.createReview(reviewSubmit)

    this.setState({
      rating: 5,
      body: '',
      username: ''
    })
  }

  handleOnClick(e) {
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }



  componentDidMount() {
    this.props.fetchProducts()
  }
  
  render() {
    if (!this.props.product) return null;

    let { product, prodAttrs, id } = this.props;
    let average_rating = parseInt(product.average_rating);
    average_rating > 0 ? average_rating : average_rating = 0
    
    return(
      <div className="product-show-page">
        
        <div className="product-show">
          
          <div className="product-show-image">
            <img className="index-image" src={`${product.photoUrls[0]}`} />
          </div>
          
          <div className="product-show-info">
            
            <div className="product-show-name">
              <h3>{product.name}</h3>
            </div>
            
            <div className="product-show-price">
              <p>${product.price}0 USD</p>
            </div>

            <div className="product-rating">
              <StarRatings
                rating={average_rating}
                starRatedColor="black"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="2px"
              />
            </div>
            
            <div onClick={this.handleOnClick}>
              Reviews
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
          
          <h2 className="product-attrs-title" ref={this.myDivToFocus}>Reviews</h2>
          <div >
            <ReviewListContainer
              product={product}
            />
          </div>
          { id !== 0 ? 
          <div>
            <h2 className="product-attrs-title">Leave a Review</h2>
          <ReviewContainer 
            id={product.id}
            rating={this.state.rating}
            body={this.state.body}
            onUpdate={this.update}
            onSubmit={this.handleSubmit}
          />
          </div>
            : <span>.</span> }
        </div>


        <div className="show-index-link">
          <Link to="/products">Back to products</Link>
        </div>
      
      </div>
    );
  }
}

export default ProductShow;