import React from 'react'

const ProductSizeSelection = props => (
  <div>
    <form action="/">
      <label>SIZE:
        <select name="size" className="dropbtn">
          <option value="#">45</option>
          <option value="#">44</option>
          <option value="#">43</option>
          <option value="#">42</option>
        </select>
      </label>
      <label>COLOR:
        <select name="color" className="dropbtn">
          <option value="#">Orange</option>
          <option value="#">Red</option>
          <option value="#">Blue</option>
          <option value="#">Green</option>
        </select>
      </label>
      <br/>
      <button type="submit" className="session-submit">Add to Cart</button>
    </form>

  </div>
);

export default ProductSizeSelection