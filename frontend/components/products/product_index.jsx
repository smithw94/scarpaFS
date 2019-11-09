import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

  componentDidMount() {
    
    if (this.props.products.length === 0) this.props.fetchProducts(this.props.products);
    // this.props.fetchAttributes(this.props.attributes)
  }

  render() {
    let { products } = this.props;

    return(
      <div className="homePage">
        <div className="index-container">

          <div className="sidebar sidebar-nav">
            <ul>
              <li>Best Use</li>
              <li>Climbing Category</li>
              <li>Gender</li>
              <li>Price</li>
              <li>Weight Range</li>
              <li>Climbing Subcategory</li>
              <li>Closure</li>
              <li>Primary Material</li>
              <li>Sole Rubber</li>
              <li>Color Family</li>
            </ul>
          </div>
          <div className="product-list">
            
              {
                products.map(product => (
                  <ProductIndexItem
                    product={product}
                    key={product.id}
                  />
                ))
              }
            
          </div>
        </div>
        <br/>
        <Link className="home-link" to="/">Home</Link>
      </div>
    )
  }
}

export default ProductIndex;