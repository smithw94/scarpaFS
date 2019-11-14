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
            <input type="checkbox" value={5} onChange={this.handleFilterAttrChange}/>
            Men's                         
          </label>
          <br/>

          <label>
            <input type="checkbox" value={6} onChange={this.handleFilterAttrChange}/>             
            Women's
          </label>
          <br/>

          <label>
            <input type="checkbox" value={1} onChange={this.handleFilterAttrChange}/>
            Approach
          </label>
          <br/>

          <label>
            <input type="checkbox" value={2} onChange={this.handleFilterAttrChange}/>
            Bouldering
          </label>
          <br/>

          <label>
            <input type="checkbox" value={3} onChange={this.handleFilterAttrChange}/>
            Competition
          </label>
           <br/>

          <label>
            <input type="checkbox" value={4} onChange={this.handleFilterAttrChange} />
            Trad
          </label>
          <br />

          <label>
            <input type="checkbox" value={8} onChange={this.handleFilterAttrChange} />
            Closure
          </label>
          <br/>
          
          <label>
            <input type="checkbox" value={11} onChange={this.handleFilterAttrChange} />
            Leather
          </label>
          <br/>
          
          <label>
            <input type="checkbox" value={12} onChange={this.handleFilterAttrChange} />
            Leather/Synthetic
          </label>
          <br/>

          <label>
            <input type="checkbox" value={13} onChange={this.handleFilterAttrChange} />
            Synthetic
          </label>
          <br/>
          
          <label>
            <input type="checkbox" value={15} onChange={this.handleFilterAttrChange} />
            XS Edge
          </label>
          <br/>
          
          <label>
            <input type="checkbox" value={16} onChange={this.handleFilterAttrChange} />
            XS GRIP2
          </label>

        </form>
      </div>
    );
  }
}

export default SidebarFilter;