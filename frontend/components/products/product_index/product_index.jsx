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
        <Link className="home-link" to="/">Home</Link>
      </div>
    )
  }
}

export default ProductIndex;