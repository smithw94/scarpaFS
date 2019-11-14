import React from 'react';

import ProductIndexItem from './product_index_item';

class ProductTable extends React.Component {
  render() {
    // filterText should still be present
    let { filterText, products } = this.props;

    let search = filterText.toUpperCase();
    let rows = [];
    
    products.forEach(product => {
      if (product.name.indexOf(search) === -1 ) return;
      rows.push(
        <ProductIndexItem
          product={product}
          key={product.id}
        />
      ) 
    })


    return (
      <div className="product-table">
        {rows}
      </div>
    );
  }
}

export default ProductTable;