import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';
import BestUse from './product_index_filters/best_use';

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
            <form>
              <BestUse />
              <br/>
              <label>Climbing Category</label>
              <br/>
              <label>Gender</label>
              <br/>
              <label>Price</label>
              <br/>
              <label>Weight Range</label>
              <br/>
              <label>Climbing Subcategory</label>
              <br/>
              <label>Closure</label>
              <br/>
              <label>Primary Material</label>
              <br/>
              <label>Sole Rubber</label>
              <br/>
              <label>Color Family</label>
            </form>
            
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