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
        {}
        <form onSubmit={this.handleSubmit}>
          <label>Rating
            <input 
              type="number"
              value={this.props.rating}
              onChange={this.update("rating")}
            />
          </label>
          <br/>
          <label>Review
            <textarea
              value={this.props.body}
              onChange={this.update("body")}
            />
          </label>
          <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

export default Review;