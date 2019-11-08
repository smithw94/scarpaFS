import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProduct(this.props.match.params.id)
  }
  
  render() {
    let { product, prodAttrs } = this.props;
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
              <h3>*****</h3>
              <p>Reviews Add Your Review</p>
            </div>
            
            <div className="product-show-description">
                {product.description}
            </div>

            <div className="product-button-selections">
              <div className="product-size-select">
                <button class="dropbtn size-button">SIZE:</button>
              </div>
              <div className="product-color-select">
                <button class="dropbtn color-button">COLOR: Black/Orange</button>
              </div>
            </div>
            <div className="product-show-attrs">
              <ul>
                {
                  prodAttrs.map(attr => (
                    <li className="product-show-attr" >{attr.attribute_name}: {attr.attribute_value}</li>
                  ))
                }
              </ul>
            </div>
            <div>
              <button type="submit" className="session-submit">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="show-index-link">
          <Link to="/products">Back to products</Link>
        </div>
      
      </div>
    );
  }
}

export default ProductShow;