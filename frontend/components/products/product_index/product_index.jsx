import React from 'react';
import { Link } from 'react-router-dom';

import SidebarFilter from './sidebar_filter';
import ProductTableContainer from './product_table_container';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterText: '',
      filterAttrs: []
    }
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleFilterAttrChange = this.handleFilterAttrChange.bind(this)
  }



  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleFilterAttrChange(attrId) {
    let id = parseInt(attrId);

    let newState = [];
    for (let i = 0; i < this.state.filterAttrs.length; i++) {
      newState.push(this.state.filterAttrs[i])
    }

    if (newState.includes(id)) {
      newState.splice(newState.indexOf(id), 1)
      return this.setState({
        filterAttrs: newState
      });
    } else {
      newState.push(id)
      return this.setState({
        filterAttrs: newState
      });
    }
  }

  componentDidMount() {
    if (this.props.products.length === 0) this.props.fetchProducts()
  }

  render() {
    return(
      <div className="home-page">
        <div className="index">
          <div className="index-filter">
            <SidebarFilter 
              filterText={this.state.filterText}
              filterAttrs={this.state.filterAttrs}
              onFilterTextChange={this.handleFilterTextChange}
              onFilterAttrChange={this.handleFilterAttrChange}
            />
          </div>
          <ProductTableContainer
            filterAttrs={this.state.filterAttrs}
            filterText={this.state.filterText}
            filter={this.props.filter}
          />          
        </div>
        <Link className="home-link" to="/">Home</Link>
      </div>
    )
  }
}

export default ProductIndex;