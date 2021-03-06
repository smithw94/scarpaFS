import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
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
          <h3 className="logininfo">Personal Information</h3>

          {this.renderErrors()}

          <div className="login-form">
            <div className="login-form-comp">
              <label>First Name:
                <br/>
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className="login-input"
                />
              </label>
              <br />
              <label>Last Name:
                <br/>
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className="login-input"
                />
              </label>
            </div>
            <br/>
            <div className="login-info-comp">
              <h3 className="logininfo">Sign-In Information</h3>
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
            </div>

            <br />
            <input className="session-submit" type="submit" value="CREATE AN ACCOUNT" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
