import React from 'react';
import SidebarFilter from './sidebar_filter';
import { Link } from 'react-router-dom';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterText: ''
    }
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
          <ProductTableContainer 
            filterText={this.state.filterText}
          />
        </div>

        <Link className="home-link" to="/">Home</Link>
      </div>
    )
  }
}

export default ProductIndex;