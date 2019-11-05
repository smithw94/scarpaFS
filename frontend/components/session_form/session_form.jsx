import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    
    return (
      <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          <h3>REGISTERED CUSTOMERS</h3>
          <br/>
          <p>If you have an account, sign in with your email address.</p>
          <br/>
          {this.renderErrors()}

          <div className="login-form">
            <br />
            <label>Email:
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <button className="session-submit" type="submit"> Sign In</button>
          </div>
        </form>

        <div className="new-customer-box">
          <h3>New Customers</h3>
          <p>
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
          <Link to={this.props.navLink}>Create an Account</Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
