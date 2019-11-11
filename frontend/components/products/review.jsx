import React from 'react'

class Review extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: 5, 
      body: ''
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

  }


  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating
            <input 
              type="number"
              value={this.state.rating}
              onChange={this.update("rating")}
            />
          </label>
          <br/>
          <label>Review
            <textarea
              value={this.state.rating}
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