import React from 'react'

class ProductSizeSelection extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state ={
      name: this.props.name,
      id: this.props.id,
      price: this.props.price,
      pic: this.props.pic,
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
    this.props.addItem({
      name: this.state.name, 
      price: this.state.price,
      size: this.state.size,
      pic: this.state.pic,
      id: this.state.id
    });
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
        <br/>
        {this.state.errors}
        <button type="submit" onClick={this.handleClick} className="session-submit">Add to Cart</button>
      </form>
    </div>
  )};
}

export default ProductSizeSelection