import React from 'react';

import ProductIndexItem from './product_index_item';

class ProductTable extends React.Component {
  render() {
    let { filterText, products } = this.props;
    let rows = [];

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1 ) return;
      rows.push(
        <ProductIndexItem
          product={product}
          key={product.id}
        />
      ) 
    })


    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default ProductTable;