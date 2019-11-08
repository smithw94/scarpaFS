import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    // this.props.fetchProduct(this.props.match.params.id)
    
    // this.props.fetchAttribute(this.props.match.params.id)
  }
  
  render() {
    let { product } = this.props;
    if (!product) return null;
  
    return(
      <div>
        {product.name}
        <div>
          <img className="showImage" src={"https://i.imgur.com/5AQShJk.png"} />

        </div>
        <br/>
        <Link to="/products">Back to products</Link>
      </div>
    );
  }
}

export default ProductShow;