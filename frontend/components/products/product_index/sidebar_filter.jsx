import React from 'react';

class SidebarFilter extends React.Component {
  constructor(props) {
    super(props)

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleFilterAttrChange = this.handleFilterAttrChange.bind(this)
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleFilterAttrChange(e) {
    this.props.onFilterAttrChange(e.target.value)
  }

  render() {
    return(
      <div>
        
        <form className="form-filter">
          <br/>
          <label>Search</label>
          <input 
              type="text"
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
          />

          <br/>
          Category
          <br/>
          <label>              
          <input
            type="checkbox" 
            value={1}
            onChange={this.handleFilterAttrChange}
          />
          Approach</label>
          <br/>
          <label>
          <input 
            type="checkbox" 
            value={2}
            onChange={this.handleFilterAttrChange}
          />
          Climbing</label>
          <br/>
          <label>
          <input type="checkbox" value="3"/>
          Men's</label>
          <br/>
          <label>
          <input type="checkbox" value="4"/>
          Women's</label>
          <br/>
          <label>
          <input type="checkbox" value="5"/>
          Youth</label>
           
        </form>
      </div>
    );
  }
}

export default SidebarFilter;