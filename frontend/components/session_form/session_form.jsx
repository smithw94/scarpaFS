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
    this.handleGuest = this.handleGuest.bind(this);
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

  handleGuest(e) {
    e.preventDefault();
    const user = {
      email: 'test',
      password: 'password'
    }
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
          <h3>REGISTERED CUSTOMERS</h3>
          <br/>
          <p>If you have an account, sign in with your email address.</p>
          <br/>
          {this.renderErrors()}

          <div className="login-form">
            <br />
            <label className="login">Email
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br />
            <label className="login">Password
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <div className="dummy">
                <input type="checkbox"></input>
                <label>Remember Me</label> 
                <span>What's this?</span>
            </div>
            <button className="session-submit" type="submit"> Sign In</button>
          </div>
          <Link className="forgotPw" to="/signup">Forgot Your Password?</Link>
        </form>
          

        <div className="new-customer-box">
          <h3>New Customers</h3>
          <p>
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
          <Link to="/signup">Create an Account</Link>
          <br/>
          <button className="session-submit" onClick={this.handleGuest}>Demo</button>
        </div>
      </div>
    );
  }
}

export default SessionForm;
