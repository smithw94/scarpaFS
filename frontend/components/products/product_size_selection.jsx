import React from 'react'

class ProductSizeSelection extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state ={
      id: this.props.productId,
      size: null
    }
  }

  update() {
    return e => this.setState({
      size: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.size === null) {
      return this.setState({
        errors: 'Please select a size'
      })
    }
    this.props.addItem({id: this.state.id, size: this.state.size});
    this.setState({
      errors: ''
    })
  }

  render () {
  return (
    <div>
      <form>
        <label>SIZE:
          <select required name="size" className="dropbtn" onChange={this.update()}>
            <option selected disabled>Choose here</option>
            <option value="45">45</option>
            <option value="44">44</option>
            <option value="43">43</option>
            <option value="42">42</option>
          </select>
        </label>
        {/* <label>COLOR:
          <select name="color" className="dropbtn">
            <option value="#">Orange</option>
            <option value="#">Red</option>
            <option value="#">Blue</option>
            <option value="#">Green</option>
          </select>
        </label> */}
        <br/>
        {this.state.errors}
        <button type="submit" onClick={this.handleClick} className="session-submit">Add to Cart</button>
      </form>
    </div>
  )};
}

export default ProductSizeSelection