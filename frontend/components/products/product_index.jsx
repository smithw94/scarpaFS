import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProducts(this.props.products)
    this.props.fetchAttributes(this.props.attributes)
  }

  render() {
    let { products } = this.props;

    return(
      <div>
        <ul>
          {
            products.map(product => (
              <ProductIndexItem
                product={product}
              />
            ))
          }
        </ul>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default ProductIndex;