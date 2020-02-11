import React from 'react'

class Review extends React.Component {
  constructor(props) {
    super(props)


    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.props.onUpdate({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e)
  }

  render() {
    return (
      <div >
        <form className="review-form" onSubmit={this.handleSubmit}>
            <tr>
              <td>
                5
                <input type="radio" id="5" name="drone" value="5"
                onChange={this.update("rating")}/> 
              </td>
              <td>
                4
                <input type="radio" id="4" name="drone" value="4"
                  onChange={this.update("rating")}/>
                  
              </td>             
              <td>
                3
                <input type="radio" id="3" name="drone" value="3"
                  onChange={this.update("rating")}/>
                  
              </td>             
              <td>
                2
                <input type="radio" id="2" name="drone" value="2"
                  onChange={this.update("rating")}/>
                  
              </td>             
              <td>
                1
                <input type="radio" id="1" name="drone" value="1"
                  onChange={this.update("rating")}/>
              </td>             
            </tr>
          <label>Review </label>
            <textarea
              id="reviewBox"
              required
              cols="31"
              value={this.props.body}
              onChange={this.update("body")}
            />
          <button className="session-submit" type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

export default Review;