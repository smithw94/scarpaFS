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
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating (1-5)
            <input 
              type="number"
              min="0"
              max="5"
              value={this.props.rating}
              onChange={this.update("rating")}
              id="rating"
            />
          </label>
          <br/>
          <label>Username</label>
          <br/>
            <input 
              required
              type="string"
              value={this.props.username}
              onChange={this.update("username")}
            />
          <br/>
          <label>Review </label>
          <br/>
            <textarea
              required
              cols="31"
              value={this.props.body}
              onChange={this.update("body")}
            />
          <br/>
          <button className="session-submit" type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

export default Review;