import React from 'react';

class SidebarFilter extends React.Component {
  constructor(props) {
    super(props)

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  render() {
    return(
      <div>
        Filter By Category
        <form className="form-filter">
          <br/>
          <label>Search
            <br/>
            <input 
              type="text"
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </label>
          <br/>
          <label>
            <input type="checkbox" value="1" />
            Approach
          </label>
          <br />
          <label>
            <input type="checkbox" value="2"/>
            Climbing
          </label>
          <br />
          <label>
            <input type="checkbox" value="3"/>
            Men's
          </label>
          <br />
          <label>
            <input type="checkbox" value="4"/>
            Women's
          </label>
          <br />
          <label>
            <input type="checkbox" value="5"/>
            Youth
          </label> 
        </form>
      </div>
    );
  }
}

export default SidebarFilter;