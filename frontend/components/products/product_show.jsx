import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }
  
  render() {

    return(
      <div>
        {console.log(this.props)}

        <Link to="/products">Back to products</Link>
      </div>
    );
  }
}

export default ProductShow;