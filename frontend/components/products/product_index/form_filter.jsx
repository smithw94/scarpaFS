import React from 'react';

const FormFilter = (props) => (
  <div>
    Filter By Category
    <form className="form-filter">
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

export default BestUse;