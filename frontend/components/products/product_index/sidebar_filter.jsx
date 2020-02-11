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
          <input 
              type="text"
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
              placeholder="Search by name..."
          />

          <br/>
          <span>Filter by Category</span> 
          <br/>

          <label className="check-container">              
            <input type="checkbox" value={37} onChange={this.handleFilterAttrChange}/>
            <span className="checkmark"></span>
            Men's                         
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={38} onChange={this.handleFilterAttrChange}/>  
            <span className="checkmark"></span>           
            Women's
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={33} onChange={this.handleFilterAttrChange}/>
            <span className="checkmark"></span>
            Approach
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={34} onChange={this.handleFilterAttrChange}/>
            <span className="checkmark"></span>
            Bouldering
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={35} onChange={this.handleFilterAttrChange}/>
            <span className="checkmark"></span>
            Competition
          </label>
           <br/>

          <label className="check-container">
            <input type="checkbox" value={36} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            Trad
          </label>
          <br />
          
          <label className="check-container">
            <input type="checkbox" value={43} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            Leather
          </label>
          <br/>
          
          <label className="check-container">
            <input type="checkbox" value={44} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            Leather/Synthetic
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={45} onChange={this.handleFilterAttrChange} />
            <span class="checkmark"></span>
            Synthetic
          </label>
          <br/>
          
          <label className="check-container">
            <input type="checkbox" value={47} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            XS Edge
          </label>
          <br/>
          
          <label className="check-container">
            <input type="checkbox" value={48} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            XS GRIP2
          </label>

        </form>
      </div>
    );
  }
}

export default SidebarFilter;