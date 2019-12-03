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
            <input type="checkbox" value={37} onChange={this.handleFilterAttrChange}/>
            Men's                         
          </label>
          <br/>

          <label>
            <input type="checkbox" value={38} onChange={this.handleFilterAttrChange}/>             
            Women's
          </label>
          <br/>

          <label>
            <input type="checkbox" value={33} onChange={this.handleFilterAttrChange}/>
            Approach
          </label>
          <br/>

          <label>
            <input type="checkbox" value={34} onChange={this.handleFilterAttrChange}/>
            Bouldering
          </label>
          <br/>

          <label>
            <input type="checkbox" value={35} onChange={this.handleFilterAttrChange}/>
            Competition
          </label>
           <br/>

          <label>
            <input type="checkbox" value={36} onChange={this.handleFilterAttrChange} />
            Trad
          </label>
          <br />
          
          <label>
            <input type="checkbox" value={43} onChange={this.handleFilterAttrChange} />
            Leather
          </label>
          <br/>
          
          <label>
            <input type="checkbox" value={44} onChange={this.handleFilterAttrChange} />
            Leather/Synthetic
          </label>
          <br/>

          <label>
            <input type="checkbox" value={45} onChange={this.handleFilterAttrChange} />
            Synthetic
          </label>
          <br/>
          
          <label>
            <input type="checkbox" value={47} onChange={this.handleFilterAttrChange} />
            XS Edge
          </label>
          <br/>
          
          <label>
            <input type="checkbox" value={48} onChange={this.handleFilterAttrChange} />
            XS GRIP2
          </label>

        </form>
      </div>
    );
  }
}

export default SidebarFilter;