import React from 'react';
import { Link } from 'react-router-dom';

import SidebarFilter from './sidebar_filter';
import ProductTable from './product_tabel';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterText: ''
    }
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

  componentDidMount() {
    if (this.props.products.length === 0) this.props.fetchProducts(this.props.products);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {

    return(
      <div className="homePage">
        <div className="index-filter">
          <SidebarFilter 
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
        </div>

        <div className="product-table-container">
          <ProductTable
            filterText={this.state.filterText}
            products={this.props.products}
          />
        </div>

        <Link className="home-link" to="/">Home</Link>
      </div>
    )
  }
}

export default ProductIndex;