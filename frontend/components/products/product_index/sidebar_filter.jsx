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
              className="search-input"
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
            <div>
              Men's
            </div>                         
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={38} onChange={this.handleFilterAttrChange}/>  
            <span className="checkmark"></span>  
            <div>
              Women's           
            </div>         
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={33} onChange={this.handleFilterAttrChange}/>
            <span className="checkmark"></span>
            <div>
              Approach
            </div>
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={34} onChange={this.handleFilterAttrChange}/>
            <span className="checkmark"></span>
            <div>
            Bouldering
            </div>
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={35} onChange={this.handleFilterAttrChange}/>
            <span className="checkmark"></span>
            <div>
            Competition
            </div>
          </label>
           <br/>

          <label className="check-container">
            <input type="checkbox" value={36} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            <div>Trad</div>
          </label>
          <br />
          
          <label className="check-container">
            <input type="checkbox" value={43} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            <div>Leather</div>
          </label>
          <br/>
          
          <label className="check-container">
            <input type="checkbox" value={44} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            <div>Leather/Synthetic</div>
          </label>
          <br/>

          <label className="check-container">
            <input type="checkbox" value={45} onChange={this.handleFilterAttrChange} />
            <span class="checkmark"></span>
            <div>Synthetic</div>
          </label>
          <br/>
          
          <label className="check-container">
            <input type="checkbox" value={47} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            <div>XS Edge</div>
          </label>
          <br/>
          
          <label className="check-container">
            <input type="checkbox" value={48} onChange={this.handleFilterAttrChange} />
            <span className="checkmark"></span>
            <div>XS GRIP2</div>
          </label>

        </form>
      </div>
    );
  }
}

export default SidebarFilter;